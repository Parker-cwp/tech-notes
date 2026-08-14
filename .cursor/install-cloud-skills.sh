#!/usr/bin/env bash
# Install AnySearch into Cursor Cloud Agent skill directories.
# Idempotent: safe to re-run from environment.json install.
set -euo pipefail

SKILL_NAME="anysearch"
AGENTS_SKILL_DIR="${HOME}/.agents/skills/${SKILL_NAME}"
CURSOR_SKILL_DIR="${HOME}/.cursor/skills/${SKILL_NAME}"

echo "cloud-skills: installing ${SKILL_NAME}"

npx --yes skills add anysearch-ai/anysearch-skill@anysearch -g -y -a cursor --copy

if [[ ! -d "${AGENTS_SKILL_DIR}" ]]; then
  echo "cloud-skills: ERROR — ${AGENTS_SKILL_DIR} missing after install" >&2
  exit 1
fi

configure_runtime() {
  local dest="$1"
  printf 'Runtime: Python\nCommand: python3 %s/scripts/anysearch_cli.py\n' "$dest" > "${dest}/runtime.conf"
}

write_env() {
  local dest="$1"
  if [[ -n "${ANYSEARCH_API_KEY:-}" ]]; then
    printf 'ANYSEARCH_API_KEY=%s\n' "${ANYSEARCH_API_KEY}" > "${dest}/.env"
    echo "cloud-skills: wrote API key to ${dest}/.env"
  elif [[ ! -f "${dest}/.env" ]]; then
    cp "${dest}/.env.example" "${dest}/.env"
    echo "cloud-skills: no ANYSEARCH_API_KEY secret; using anonymous access"
  fi
}

configure_runtime "${AGENTS_SKILL_DIR}"
write_env "${AGENTS_SKILL_DIR}"

mkdir -p "${HOME}/.cursor/skills"
rm -rf "${CURSOR_SKILL_DIR}"
cp -a "${AGENTS_SKILL_DIR}" "${CURSOR_SKILL_DIR}"
configure_runtime "${CURSOR_SKILL_DIR}"
write_env "${CURSOR_SKILL_DIR}"

python3 "${AGENTS_SKILL_DIR}/scripts/anysearch_cli.py" doc >/dev/null
echo "cloud-skills: ${SKILL_NAME} ready at ${AGENTS_SKILL_DIR}"
echo "cloud-skills: mirrored to ${CURSOR_SKILL_DIR}"

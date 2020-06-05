APP_ROOT=/home/gtszrcp/gtszrcp
COMPOSE_FILE="${APP_ROOT}/docker-compose.yml"
DUMP_NAME=dump_`date +%Y%m%d%H%M%S`.sql
DUMP_PATH="${APP_ROOT}/.backup/${DUMP_NAME}"

echo "----> DUMP DATABASE TO $DUMP_NAME";

docker-compose -f "$COMPOSE_FILE" --verbose exec db pg_dumpall -h db -U gtszrcp > "${DUMP_PATH}"

echo "DUMP DATABASE DONE <----";
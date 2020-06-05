echo "----> CHECK .htaccess FILE ON STATIC APPS";

APP_ROOT=/home/gtszrcp/gtszrcp;
DEFAULT_HTACCESS="${APP_ROOT}/default.htaccess"

if test -f "$DEFAULT_HTACCESS"; then
	echo 'defualt htaccess exists';
else
	echo "default htaccess does not exist";
	exit 1;
fi

function check_htaccess() {
	if test -f "$2"; then
		echo ".htaccess file exists on $1";
	else
		echo ".htaccess file does not exists on $1";
		echo "link default.htaccess to $1";
		ln -s $DEFAULT_HTACCESS $2;
	fi
}

FRONT_ROOT="${APP_ROOT}/front";
FRONT_HTACCESS="${FRONT_ROOT}/dist/.htaccess";

check_htaccess $FRONT_ROOT $FRONT_HTACCESS;

echo "CHECK .htaccess FILE ON STATIC APPS DONE <----";

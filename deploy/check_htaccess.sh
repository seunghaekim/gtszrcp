echo "----> CHECK .htaccess FILE ON STATIC APPS";

APP_ROOT=/home/ragyeom/ragyeom;
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

ADMIN_ROOT="${APP_ROOT}/admin";
ADMIN_HTACCESS="${ADMIN_ROOT}/dist/.htaccess";

check_htaccess $ADMIN_ROOT $ADMIN_HTACCESS;

TATTOO_ROOT="${APP_ROOT}/tattoo";
TATTOO_HTACCESS="${TATTOO_ROOT}/dist/.htaccess";

check_htaccess $TATTOO_ROOT $TATTOO_HTACCESS;

echo "CHECK .htaccess FILE ON STATIC APPS DONE <----";

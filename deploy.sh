echo ':::: START DEPLOY STEPS ::::';

IS_TEST=0
args=("$@")

for (( c=0; c<$#; c++ ))
do
    if [ ${args[$c]} = '-t' ]
    then
        IS_TEST=1
    fi
done

echo '==> BACKUP DATABASE';

bash deploy/dbbackup.sh;

echo '==> GIT PULL';

git pull origin master;

echo '==> UP DOCKER CONTAINER WITH BUILD';

if [ $IS_TEST -eq 0 ]
then
  echo '====> up docker-compose'
  docker-compose up -d --build
else
  echo '====> up docker-compose with test'
  docker-compose --verbose up --build
fi

echo '==> COPY .htaccess FILES to dist';

bash deploy/check_htaccess.sh;

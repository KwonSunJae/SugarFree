


---- docker 를 통한 mysql 실행 방법 ----

현재 mysql port는 3306으로 설정 되어있습니다.

--설치---
1. cd mysql
2. sudo docker build --tag mysql .

-실행-

3. docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql:latest ////<password> 는 공동 설정한 비번으로 해주세요

-종료-

4. docker stop mysql-continer

-재시작-

5. docker restart mysql-container


--db 접속을 위한 bash 방법 ---
~# docker exec -it mysql-container bash
~# mysql -u root -p
비번 입력 mysql 접속 완료



--- db 접속종료 ---

exit 입력하면 db원격 접속 종료
bash 에서 exit 입력하면 bash 종료
mysql 완전 종료시 docker stop mysql-container 입력
ㅡ
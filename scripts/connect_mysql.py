import pymysql

conn = pymysql.connect(
    host='localhost',
    port=3306,
    user='user',
    password='qwer1234',
    db='db',
    charset='utf8mb4'
)
curs = conn.cursor()
curs.execute('SET NAMES utf8mb4')
curs.execute("SET CHARACTER SET utf8mb4")
curs.execute("SET character_set_connection=utf8mb4")

sql = "select * from auth_user"
curs.execute(sql)
rows = curs.fetchall()

for i, row in enumerate(rows):
    print(row)
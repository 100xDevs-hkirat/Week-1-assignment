.option("badRecordsPath",badRecordsPath )
+----------+---------+--------+--------+----+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
|First Name|Last Name|City    |AgeGroup|Age |_corrupt_record                                                                                                                                                |
+----------+---------+--------+--------+----+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
|null      |null     |null    |Young   |null|{ "first_name": "James", "last_name": "Butt", "city": "New Orleans", "county": "Orleans", "state": "LA", "zip": "70116", "age": 10a9, "phone": "504-621-8927"},|
|Josephine |Darakjy  |BRIGHTON|Young   |-8  |null                                                                                                                                                           |
|null      |null     |null    |Young   |null|{ "first_name": , "last_name": "Venere", "city": "Bridgeport", "county": "Gloucester", "state": "NJ", "zip": "8014", "age": 7, "phone": "856-636-8749"},       |
|null      |null     |null    |Young   |null|{ "first_name": , "last_name": "Paprocki", "city": "Anchorage", "county": "Anchorage", "state": "AK", "zip": "99501", "age": 10, "phone": "907-385-4412"},     |
|          |Foller   |HAMILTON|Young   |11  |null                                                                                                                                                           |
|Simona    |Morasca  |ASHLAND |Young   |14  |null                                                                                                                                                           |
|Mitsue    |Tollner  |CHICAGO |Young   |15  |null                                                                                                                                                           |
|Leota     |Dilliard |SAN JOSE|Young   |20  |null                                                                                                                                                           |
|Fletcher  |Flosi    |ROCKFORD|Young   |9   |null                                                                                                                                                           |
+----------+---------+--------+--------+----+---------------------------------------------------------------------------------------------------------------------------------------------------------------+

Bad Records:

+----------+---------+--------+--------+---+---------------+
|First Name|Last Name|City    |AgeGroup|Age|_corrupt_record|
+----------+---------+--------+--------+---+---------------+
|Josephine |Darakjy  |BRIGHTON|Young   |-8 |null           |
|Fletcher  |Flosi    |ROCKFORD|Young   |9  |null           |
+----------+---------+--------+--------+---+---------------+
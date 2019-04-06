CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VarChar(30),
    address VarChar(100),
    city VarChar(50),
    state VarChar(2), 
    zip INTEGER,
    img TEXT,
    mortgage decimal,
    rent decimal

)

INSERT INTO houses (name,address,city,state,zip, img, mortgage, rent)
VALUES  ('Todd','123 Main Street','Lehi','UT',12345, 'http://urly.fi/1cak', 600, 800),
        ('Clayton','456 Center Street','Provo','UT',67890, 'http://urly.fi/1cal', 500, 800),
        ('Hunter','345 Real Street','Houston','TX',10293, 'http://urly.fi/1bTX', 600, 900),
        ('Mark','987 Fake Street','San Diego','CA',78964, 'http://urly.fi/1cam', 400, 800),
        ('Bryan','432 N Sycamore','Philadelphia','PA',34567, 'http://urly.fi/1can', 800, 600)
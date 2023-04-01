USE EZCART;

CREATE VIEW V_CustomerSelect AS
SELECT
	c.CustomerId,
    u.Email,
    u.Phone,
    u.FName,
    u.LName
FROM
	Customer c
    JOIN User u On u.UserId = c.CustomerId
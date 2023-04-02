USE EZCART;

CREATE OR REPLACE VIEW V_CustomerCartSelect AS
SELECT
	ca.ProductId,
    p.ProductName,
    p.ImageUrl,
    ca.Quantity
FROM
	Customer c
    JOIN Cart ca On ca.CustomerId  = c.CustomerId
    JOIN Product p ON p.ProductId = p.ProductId
;
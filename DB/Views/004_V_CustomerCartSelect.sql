USE EZCART;

CREATE OR REPLACE VIEW V_CUSTOMERCARTSELECT AS 
	SELECT
	    c.CustomerId,
	    ca.ProductId,
	    p.ProductName,
	    p.ImageUrl,
	    ca.Quantity
	FROM Customer c
	    JOIN Cart ca On ca.CustomerId = c.CustomerId
	    JOIN Product p ON p.ProductId = ca.ProductId
; 
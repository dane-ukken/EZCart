USE EZCART;

CREATE OR REPLACE VIEW V_WishListSelect AS
SELECT
	w.CustomerId,
    w.ProductId,
    p.ProductName,
    P.ProductDescription,
    p.ImageUrl
FROM
	WishList w
    JOIN Product p On p.ProductId = w.ProductId
;
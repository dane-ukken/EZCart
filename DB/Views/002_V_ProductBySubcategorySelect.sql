USE EZCART;

CREATE OR REPLACE VIEW V_ProductSubcategorySelect AS
SELECT
	p.ProductId,
    p.ProductName,
    p.ProductDescription,
    p.ImageUrl
FROM
	Product p
    JOIN Subcategory s On s.SubcategoryId = p.SubcategoryId
;
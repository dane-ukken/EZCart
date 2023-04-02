USE EZCART;

CREATE OR REPLACE VIEW V_SubcategoryByCategory AS
SELECT
	s.SubcategoryId,
    s.SubcategoryName
FROM
	Category c
    JOIN Subcategory s On s.CategoryId = c.CategoryId
;
USE EZCART;

CREATE OR REPLACE VIEW V_CategorySelect AS
SELECT
	c.CategoryId,
    c.CategoryName
FROM
	Category c
;

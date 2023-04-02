USE EZCART;

CREATE OR REPLACE VIEW V_CustomerRatingsSelect AS
SELECT
	cr.CustomerId,
    cr.ProductId,
    cr.Rating
FROM
	CustomerRating cr
;
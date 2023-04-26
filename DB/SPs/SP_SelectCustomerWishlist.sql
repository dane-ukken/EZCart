use ezcart;

DROP PROCEDURE IF EXISTS SP_SelectCustomerWishlist;

delimiter //

CREATE PROCEDURE SP_SelectCustomerWishlist (IN inputId INT)
BEGIN
	SELECT 
	*
	FROM
		v_wishlistselect
	WHERE CustomerId = inputId;
END//
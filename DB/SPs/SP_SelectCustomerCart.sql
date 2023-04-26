use ezcart;

DROP PROCEDURE IF EXISTS SP_SelectCustomerCart;

delimiter //

CREATE PROCEDURE SP_SelectCustomerCart (IN inputId INT)
BEGIN
	SELECT 
	*
	FROM
		v_customercartselect
	WHERE CustomerId = inputId;
END//
USE EZCART;

CREATE OR REPLACE VIEW V_VendorSelect AS
SELECT
	v.VendorId,
    u.Email,
    u.Phone,
    u.FName,
    u.LName,
    v.StoreAddress
FROM
	Vendor v
    JOIN User u On u.UserId = v.VendorId
;
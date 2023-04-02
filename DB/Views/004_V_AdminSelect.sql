USE EZCART;

CREATE OR REPLACE VIEW V_AdminSelect AS
SELECT
	a.AdminId,
    u.Email,
    u.Phone,
    u.FName,
    u.LName
FROM
	AdminUser a
    JOIN User u On u.UserId = a.AdminId
;
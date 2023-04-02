USE EZCART;

CREATE OR REPLACE VIEW V_ProductQuantityByVendorSelect AS
SELECT
	p.ProductId,
    p.ProductName,
    p.ProductDescription,
    p.ImageUrl,
    ps.Quantity,
    ps.ItemPrice,
    ps.VendorId,
    vs.Fname + vs.Lname AS VendorName,
    vs.Storeaddress
FROM
	Product p
    JOIN ProductSupplies ps On ps.ProductId = p.ProductId
    JOIN V_VendorSelect vs on vs.VendorId = ps.VendorId
;



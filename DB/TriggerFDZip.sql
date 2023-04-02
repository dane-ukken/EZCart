# Trigger for Functional dependency Zip ---> City, State

DELIMITER $$
CREATE TRIGGER Address_before_insert_trigger 
BEFORE INSERT ON CustomerAddress 
FOR EACH ROW 
BEGIN 
    DECLARE city_val VARCHAR(255); 
    DECLARE state_val VARCHAR(255); 
    SELECT city, state INTO city_val, state_val FROM CustomerAddress WHERE zip = NEW.zip; 
    IF new.city <> city_val OR new.state <> state_val THEN 
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Cannot insert into CustomerAddress table. Functional Dependency violated.'; 
    END IF; 
    SET NEW.city = city_val; 
    SET NEW.state = state_val; 
END$$
DELIMITER ;
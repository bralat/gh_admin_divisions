-- SQLite
-- select * from A
-- left join (B inner join C on B.fkC = C.pk) 
-- B on A.optionalfkB = B.pk

SELECT 
    towns.*,
    mmdas.name as district_name,
    regions.id as region_id,
    regions.name as region_name
FROM towns
left join (mmdas left join regions on mmdas.region_id = regions.id)
mmdas on towns.district_id = mmdas.id
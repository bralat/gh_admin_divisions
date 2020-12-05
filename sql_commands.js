const regions = `
    SELECT 
        regions.*, 
        towns.name as capital_name 
    FROM 
        REGIONS INNER JOIN TOWNS ON REGIONS.CAPITAL_ID = TOWNS.ID;
`

const mmdas = `
    SELECT 
        mmdas.*, 
        towns.name as capital_name,
        regions.name as  region_name
    FROM mmdas 
        INNER JOIN towns ON mmdas.capital_id = towns.id
        INNER JOIN regions ON mmdas.region_id = regions.id;
`

const towns = `
    SELECT 
        towns.*,
        mmdas.name as district_name,
        regions.id as region_id,
        regions.name as region_name
    FROM towns
        left join (mmdas left join regions on mmdas.region_id = regions.id)
        mmdas on towns.district_id = mmdas.id
`

module.exports = {regions, mmdas, towns}
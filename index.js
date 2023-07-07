import fetch from 'node-fetch'

export const getFestivalByRegion = async (region) => {
    let encodedRegion = encodeURIComponent(region);
    let url = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.region=" + encodedRegion
    
    const response = await fetch(url)

    return response.json()
}

export const getFestivalByDepartment = async (departement) => {
    let url = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.departement=" + departement
    
    const response = await fetch(url)

    return response.json()
}

export const getFestivalByTheme = async (theme) => {
    let encodedTheme = encodeURIComponent(theme);
    let url = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.complement_domaine=" + encodedTheme
    
    const response = await fetch(url)

    return response.json()
}

export const getFestivalByRegionAndDepartement = async (region, departement) => {
    let encodedRegion = encodeURIComponent(region);
    let url = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.region="+ encodedRegion +"&refine.departement=" + departement

    const response = await fetch(url)

    return response.json()
}

export const getFestivalById = async (id) => {
    let url = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.recordId=" + id
    const response = await fetch(url)

    return response.json()
}

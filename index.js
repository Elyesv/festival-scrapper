import fetch from 'node-fetch'

export const getFestivalByRegion = async (region) => {
    let encodedRegion = encodeURIComponent(region);
    let url = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.region=" + encodedRegion
    
    const response = await fetch(url)

    return response.json()
}


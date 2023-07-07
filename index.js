function getFestivalByRegion(region) {
    let encodedRegion = encodeURIComponent(region);
    let url = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.region=" + encodedRegion
    return url
}

export default getFestivalByRegion;
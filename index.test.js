import { getFestivalByDepartment, getFestivalByRegion, getFestivalByTheme, getFestivalByRegionAndDepartement, getFestivalById} from './index'

test('it should return a list of festivals', async () => {
    const response = await getFestivalByRegion('Auvergne-Rhône-Alpes')
    expect(typeof(response)).toBe('object')
})

test('it should return a list of festivals', async () => {
    const response = await getFestivalByDepartment('06')
    expect(typeof(response)).toBe('object')
})

test('it should return a list of festivals', async () => {
    const response = await getFestivalByTheme("Jazz, blues et musiques improvisées")
    expect(typeof(response)).toBe('object')
})

test('it should return a list of festivals', async () => {
    const response = await getFestivalByRegionAndDepartement('Auvergne-Rhône-Alpes', '06')
    expect(typeof(response)).toBe('object')
})

test('it should return a list of festivals', async () => { 
    const response = await getFestivalById('85e18f4250ba9a3601a4fc66b597ea695a728985')
    expect(typeof(response)).toBe('object')
})

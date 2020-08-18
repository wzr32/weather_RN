const icons = [
    {icon: "01d", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-01-512.png"}, 	
    {icon: "02d", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-02-512.png"}, 	
    {icon: "03d", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-27-512.png"}, 	
    {icon: "04d", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-22-512.png"}, 	
    {icon: "09d", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-32-512.png"}, 
    {icon: "10d", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-03-512.png"}, 	
    {icon: "11d", link: "https://cdn2.iconfinder.com/data/icons/weather-line-5/500/weather-23-2-512.png"}, 
    {icon: "13d", link: "https://cdn2.iconfinder.com/data/icons/weather-line-5/500/weather-24-2-512.png"}, 	
    {icon: "01n", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-10-512.png"},
    {icon: "02n", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-11-512.png"},
    {icon: "03n", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-27-512.png"},
    {icon: "04n", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-22-512.png"},
    {icon: "09n", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-32-512.png"},
    {icon: "10n", link: "https://cdn1.iconfinder.com/data/icons/weather-line-5/500/weather-14-512.png"},
    {icon: "11n", link: "https://cdn2.iconfinder.com/data/icons/weather-line-5/500/weather-23-2-512.png"},
    {icon: "13n", link: "https://cdn2.iconfinder.com/data/icons/weather-line-5/500/weather-24-2-512.png"},
]

export function getIcon(iconId) {
    if (iconId === ''){
        return null
    }
    let weatherIcon = (icons.filter( e => e.icon === iconId))
    return weatherIcon[0].link
}
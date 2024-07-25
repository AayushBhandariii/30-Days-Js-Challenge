export const chaiCodeWeb = `chaicode.com`;
export const webAuthor = `Hitesh Choudhary`

export async function getHiteshSirGithub(){
    try {
        const respone = await fetch(`https://api.github.com/users/hiteshchoudhary`)
        const data = respone.json()
        return data.name
    } catch (error) {
        throw new Error( error )
    }

}

export function getHiteshSirSocials(){
    const hiteshSirSocials = {
        englishYoutubeChannel : `https://www.youtube.com/hiteshchoudharydotcom`,
        hindiYoutubeChannel : `https://www.youtube.com/@chaiaurcode`,
        discordServerLink : `https://discord.com/invite/WDrH3zuWFb`,
        gmail : `hitesh@hiteshchoudhary.com`,
        x : `https://x.com/hiteshdotcom`
    }
    return hiteshSirSocials
}

export const hiteshSir = {
    name : webAuthor ,
    website : chaiCodeWeb ,
    portfolio : `https://hiteshchoudhary.com/` ,
    
    getHiteshSirGithub,
    getHiteshSirSocials,
}
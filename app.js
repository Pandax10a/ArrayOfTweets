/* create an array with with multiple objects that have 4 key in each */
/* since i am not able to access twitter, i will be using fml instead */
let tweets = [
    {
        tweet: `if you've ever stolen a Tweet say sorry`,
        username: `@Twitter`,
        created_at: `06-30-2022`,
        age: 47
    },
    {
        tweet: `Today, we had cabbage. A lot of cabbage. The farts are so horrid I can barely stand myself.`,
        username: `@Random_chick`,
        created_at: `06-21-2022`,
        age: 26
    },
    {
        tweet: `Today, I found out that my roommate has a good voice, because he loudly sings Korean love songs at one in the morning.`,
        username: `@Meh`,
        created_at: `06-06-2022`,
        age: 34
    },
    {
        tweet: `Today, I caught a cold. Turns out that the neighbours who have noisy children have also caught COVID and have to isolate for a week. I not only have to deal with a cold, but I have to overhear kids shows and crying through the thin wall dividing our houses.`,
        username: `@Jeanette`,
        created_at: `06-21-2022`,
        age: 20
    },
    {
        tweet: `When you sleep over at your friends house and they forget to give you a blanket`,
        username: `@tracceeeee`,
        created_at: `07-28-2019`,
        age: 26
    },
    {
        tweet: `So wtf am I doing wrong`,
        username: `@liyahhh_liyah`,
        created_at: `11-29-2017`,
        age: 17
    },
    {
        tweet: `I put my life on the line so my girl can have the perfect photo LMFAO!!!`,
        username: `@NATEGAWD`,
        created_at: `03-30-2019`,
        age: 16
    },
    {
        tweet: `adam driver looks like someone tried to draw keanu reeves from memory`,
        username: `@tayallard`,
        created_at: `02-22-2015`,
        age: 25
    },
    {
        tweet: `if you've ever stolen a Tweet say sorry`,
        username: `Twitter`,
        created_at: `06-30-2022`,
        age: 11
    },
    {
        tweet: `if you've ever stolen a Tweet say sorry`,
        username: `Twitter`,
        created_at: `06-30-2022`,
        age: 19
    },
]

// need to create a while loop to identify user of atleast 18 and print out: tweet, username, created_at
// added blank console.log(``) so there's a space seperation for better viewing
let counter = 0;
while(counter < tweets.length) {
    if (tweets[counter][`age`] >= 18) {
        console.log(`This user is 18 or older`);
        console.log(`tweet: ${tweets[counter][`tweet`]}`);
        console.log(`username: ${tweets[counter][`username`]}`);
        console.log(`Created on: ${tweets[counter][`created_at`]}`);
        console.log(``);
    }
    counter++;
}

// same as above but using for loop, copy pasted same code and adjusted conditionals

for (let counter = 0; counter < tweets.length; counter++) {
    if (tweets[counter][`age`] < 18) {
        console.log(`This user is under 18`);
        console.log(`tweet: ${tweets[counter][`tweet`]}`);
        console.log(`username: ${tweets[counter][`username`]}`);
        console.log(`Created on: ${tweets[counter][`created_at`]}`);
        console.log(``);
    }

}
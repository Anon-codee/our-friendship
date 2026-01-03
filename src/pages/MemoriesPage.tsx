import { motion } from "framer-motion";
import NewspaperHeader from "@/components/NewspaperHeader";
import MemoryCard from "@/components/MemoryCard";
import { Heart } from "lucide-react";

// Sample memories - you can customize these!
const memories = [
  {
    title: "The Day We First Met",
    date: "Somewhere in January (IK I was suprised too, but CSI ka event Jan me hi hua tha",
    content:
      " We have multiple firsts so I don't know which first to count 🤔, coz then the first actual time I actually noticed you would be right after CSI's first meet I think, coz we all got to talking and exchanging our branches and you were like we're in the same class 🤡 and I SWEAR that was the first time I saw you coz if I'm being honest I still don't remember all the people in our class 🤡 but anyways, so that's the actual first time we met. What suprises me more is that even though I knew you were in my class I STILL didn't see you in class 💀 . I'm definitely blind. Then we texted that one time to share the reels we made remember? God I thought you were so dumb, coz that edit was stupid lmfao 😂 ...Shouldn't really base things on first impression ig, but yeaah that was my first impression of youu dumbb guyy who's in my clubb and I talk to sometimes. the dumb part hasn't changed much hehe. 😝 ",
  },
  {
    title: "Reading hall talks",
    date: "Somewhere in March ( I KNOW MARCH COZ I WAS SAD AND YOU SENT ME THE TOXIC PONY DANCEEE BAHAHAHAHAHAHA)",
    content:
      "Somewhere around this time, I think I was cutting off from my big EC group and all, and was just feeling super lonely and sad 😢. Also Mahika was being a total bitch 🙂 so I was pretty much alone and I don't know I tried to keep it in me, thinking it's finee, just 4 more years then I'll be finee 💀 Actually this is better, so that I can focus on my studies 🙂. Yup that was some bullshit. Then I asked you bout the adobe thingy, and you tried your level best to help me, sitting with me for hours trying to get it to work, giving me a whole SD card thing coz that's what you do, you are this selfless idiot who doesn't care bout anything except helping the person who has asked them. Seriously you're too fucking nice for this world. Somewhere in there, from fixing the adobe thing to Crescendo to getting ice cream down near that amul place, somewhere there our texts got more and more frequent. Sitting for hourss in that reading hall, saying that we're meeting up to get the adobe shit fixed, me distracting you as always 🤡. Us talking bout the mossst weirdass shit instead of doind what we planned to do. It didn't even take us time you know? One minute we're in the reading hall talking bout something, the next minute you're crying in front of me in the canteen. YES I OBVIOUSLY HAD TO BRING IT UP, IT WOULDN'T HAVE BEEN FUN OTHERWISE. fineee, one minute you fixing my adobe thingy, the next minute me crying bout how I'm soooo alone and you being 'amazing at consoling' telling me to get a life and do shit by myself. Somewhere here and there, from you texting me that ma'am has already arrived in class and that I'm 20 mins late 💀 to me asking if you're gonna come to colege the next day, I found my best friend.",
  },
  {
    title: "Taljai",
    date: "April (This deserves an entire section to itself)",
    content:
      " If someone asked me to narrate one funny incident from our entire time together this would come hurtling down memory lane. I still remember how we were always talking bout going somewhere out, far enjoying nature blah blah, and I kept saying haaan sureee maybee 🤡. See in my defense I said it then and I'll say it noww too, we hardly knew each otherr it had been like 1 month since we got close obviousllyy I wouldn't want to go anywhere akele with youu ... But then I gave in fineee let's go to this place ... I lovedd the ride back from the place, when it was still raining and we were all laughing and going down hill from that scenic place. Mere hb ke saath meri pehli bakchodi 😂 ",
  },
  {
    title: "The Important Dates",
    date: "All the dates we hung outt plus or minuss",
    content:
      "Remember we went to Dipex?? vo Radha ke saath and she didn't like you at alll lmfao. Then I sprained my wrist and we met Kushagraa, our first macd sessioonn April 17th, our first hackathonn itni ladaiyo ke baaad April 23, phir vishwautsav me bakchodii but we gotta dance together iss baar bc apne apne domains ke saath nai. We went to Wendy's August 6th, phir BBQ August 19th, phir demon slayer dekhnee, garba khelnaa, you came all the way ghar se mere bday ke liyee 😭 and then humare kiosk, vada pav at siddhi vinayak, meridian ke bahar wale talks toh hote hi hai. How can I forget the countless times you picked me up and dropped me swargate pe. my personall rapidoo. We've spent...so much time together this year, and ik pura saal bhi nai hua, but it just feels like I've known you forever, jese humari vibe match karti hai, humare moods match karte hai, humari bakchodi match karti hai, humara chatorapan match karta hai, everything. You were the person I didn't know I needed, until you were all up in my life.",
  },
  {
    title: "Such a chaotic year",
    date: "Specific section for all the fights we had",
    content:
      "I feel like I shouldn't add this here, coz acche me kyu chutiyapa yaad dilana hai, par that's specifically the reason.My mother, TV series, movies well kahi toh mene ye suna tha ki ladaiya unke beech me jyada hoti hai jinke beech me pyaar jyada hota hai, and tbh I never really got that, like isn't that toxic or sm. well I think they all said it wrong. According to me, when you fight with someone, even in all the chaos, in the anger, in the 'No he's soo stupid, ofc I'm right', there's something even more important and that is realising how much this person means to you. Soz even after all the fights, after all the times we ignored each other, didn't talk to each other, I would always remember how much you meant to me. and we'd come back to each other, so the fights weren't completely worthless after all, but wouldn't recommend it 💀",
  },
  {
    title: "Here's to more years of me annoying youu",
    date: "Fin",
    content:
      "This is your first birthday, with me ig. Last time I didn't knoww it was your bday, it's suprising, how one year a date is just a date, and then the next it's a very special important date, atleast to me, because it's my favourite person's birthday. You have taught me countless things, you've seen me at my happiest, at my saddest, at my lowest, my highest, my ugliesstt most gandee wale moments and you're still here. It still hasn't been a year since we've been friends but it feels like I've known you forever, like you were always there for me and I just hadn't recognized you yet. You have done so much for me, I don't think I could every repay you. It started with us just meeting, and getting to know each other, to one day me just changing your contact to Param Mitr, my best friend, the one person who I would tell anything in a heartbeat, to the person who knows me like a book and has the most impact on my life in the past year. I cannot begin to tell you how grateful I am for you, for the way you listen to me, to make me feel that I'm never alone, to always being there for me. also the way you get on my nerves sometimes, like howww can a person be sooo annoyingg. but, in full honesty, I wouldn't have it any other way, if there was a chance I could go back in the past or relive this life a thousand times, I'd want you to by my best friend every single time. I love you brother. Happy birthday ✨",
  },
];

const MemoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Newspaper container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="newspaper-paper rounded-sm p-6 md:p-10 lg:p-12"
        >
          <NewspaperHeader date="January 3rd, 2025" />

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              HAPPY BIRTHDAY
            </h2>
            <p className="font-headline text-2xl md:text-3xl italic text-foreground/80">
              To My Best Friend
            </p>
            <div className="newspaper-divider mt-6" />
          </motion.div>

          {/* Intro section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 p-6 border-2 border-foreground/10 bg-secondary/30 rounded-sm"
          >
            <p className="font-body text-xl md:text-2xl text-center leading-relaxed text-foreground/90">
            Before you start reading, please note that I have short term memory loss, so maybee some of the dates might be wrong, but bear with it.
            </p>
          </motion.div>

          {/* Memory cards */}
          <div className="space-y-6">
            {memories.map((memory, index) => (
              <MemoryCard
                key={index}
                title={memory.title}
                date={memory.date}
                content={memory.content}
                index={index}
              />
            ))}
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 pt-8 border-t-4 border-double border-foreground/20 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-accent fill-accent" />
            </div>
            <p className="font-headline text-2xl font-bold text-foreground mb-2">
              HAPPY BIRTHDAY
            </p>
            <p className="font-body text-lg text-muted-foreground italic">
              With love
            </p>
            <div className="mt-6 flex items-center justify-center">
              <div className="h-px w-20 bg-foreground/20" />
              <span className="mx-4 font-masthead text-xl text-foreground/60">∞</span>
              <div className="h-px w-20 bg-foreground/20" />
            </div>
            <div className="overflow-hidden relative w-full max-w-4xl mx-auto">
            <div className="flex animate-carousel space-x-8">
            {["31.jpeg","bachpan.jpeg","crescendo.jpeg","garba.jpeg","gay.jpeg"].map((img,i)=>(
             <img 
              key={i}
              src={`/memories/carousel/${img}`}
               className="h-64 rounded-xl shadow-lg"
               />
                    ))}
  </div>
</div>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
};

export default MemoriesPage;

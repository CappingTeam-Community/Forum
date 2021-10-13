/**
* Initial database for Community Web Application
* InsertData.sql will hard insert some sample data
* to display on web application
*
* @version  1.0.0
* @since    10-12-2021
* @author   Devin White
**/

INSERT INTO User_tbl
(UserID, UserName, Password, Email)
VALUES  (1, 'Devinwhite', 'Password1', 'devin.white1@marist.edu'),
        (2, 'BrianLynch', 'Password2', 'Brian.Lynch1@marist.edu'),
        (3, 'AnthonyDamico', 'Password3', 'Anthony.Damico1@marist.edu'),
        (4, 'ZachFreedman', 'Password4', 'Zach.Freedman1@marist.edu'),
        (5, 'DylanBrightman', 'Password5', 'Dylan.Brightman1@marist.edu');
INSERT INTO Category_tbl
(CategoryID, CategoryName, CategoryVotes)
VALUES(1, 'Marvel', 2000000),
      (2, 'League of Legends', 5400000);

SELECT * FROM Category_tbl;

INSERT INTO Post_tbl
(PostID, CategoryID_Post, PostTitle, PostBody, PostDate, PostVotes, CreatorID)
VALUES  (1, 1, 'Why is Shang Chi Disney Plus release date November 11th, when they said only 45 Days of Exclusivity?', 
'The movie came out September 3rd. Thats more like 70 days ?',"2021-10-11", 1, 6),
        (2, 1, 'Before the advent of the MCU who would you say were the A-list, B-list, C-list, and D-list characters of Marvel Comics?',
        "People often point to how Iron Man was an 'obscure' character before the movie, but I don't think that's completely accurate. That said I thought it would be insightful to take a step back through time and determine who the A-listers, B-listers, etc. were before the MCU took lesser-known characters and popularized them.

I admit that I was not into Marvel much until around the first Avengers movie, so what I'm saying is largely based on second-hand experiences and what I can vaguely remember before Iron Man came out. Here is what I generally think the hierarchy of Marvel was:

A-LIST - Spider-Man, X-Men, Fantastic Four, Hulk. Basically all of the heroes who regularly got cartoons, movies, merchandise, etc. and were front and center on posters.

B-LIST - Iron Man, Captain America, Thor, Daredevil, and a few others that weren't as exposed in the public eye but were still very much prevalent in Marvel media, just usually as supporting roles and not the main focus. Though I'd say Cap and Daredevil sort of rode the line between A and B-list.

C-LIST - Ant-Man, Doctor Strange, Black Panther, Captain Marvel, and most of the characters introduced after Phase 1 in the MCU. Fans of comics almost certainly knew who they were but they were mostly obscure in the eyes of the general public.

D-LIST - Once you get to this point it's hard to really determine which characters belong here, but what I generally consider 'D-list' are the characters who even some comic fans didn't know anything about. I would like to say groups like the Guardians of the Galaxy or the Eternals, but I actually think those were too obscure to even justify calling them D-list; they were basically off the radar entirely.

I'm not sure what to call this but there also seemed to be this weird area where Punisher and Blade were where they're pretty well-known to the public but weren't traditionally associated with Marvel heroes. Blade was a massively successful action-horror franchise but even today I have met people who didn't seem to know it was a Marvel movie, and at this point Punisher's skull symbol has taken on a completely new life as a mascot for the 'extreme edge goth punk' crowd, and an unsettling amount of soldiers and police officers, which is kind of scary.

Does this sound about right? If not, who would you rank as A-list, B-list, etc. before the inception of the Marvel Cinematic Universe?",
'2021-10-13',
6,
"RangerRed02"),
        (3, 1, "So who all is dead as of right now?", 'I have seen most of the MCU films once but none twice and some never so I am a really casual viewer.

After watching what feels like a dozen movies over the last several years (some out of order) and with the time-travel shenanigans, multiverses, the Snap and Blip, and fact that the films themselves are set in different “time periods” of the MCU, I don’t know which heroes are dead and which aren’t as of “present day” MCU.

Tony Stark, I think… and I remember Captain America getting real old and retiring after time-travel stuff so I guess he is dead too? Anyone else?', '2021-10-13', 20,6);

SELECT * FROM Post_tbl;

INSERT INTO Comment_tbl
(Comment_ID, PostID_Comment, Comment, CommentDate, CommentVotes, CommenterID, CommentTags)
VALUES  (1, 1, "Just cause it has a 45 day exclusive window doesnt mean they will release the movie right away on digital, it just means tfter 45 days they now are allowed to release it digitally, but if they want to hold if off for another month or 2, they can do it.
Plus its been doing well in cinemas, so makes sense they'll want to try and make a bit more money there before you give the option to watch it at home", "2021-10-11", 0, 5, null),
        (2, 1, "45 days exclusive to theaters. After that you typically add in the pay to own platforms simuch as Blu-ray, iTunes, etc.
Then, after that sales channel, it comes to subscription streaming services.", "2021-10-11", 0, 4, null),
        (3, 1, "I don’t know but why do I have a feeling that it still will not be released in 11th Nov cuz it clashes with Eternals and can hurt even if slightest i think they will further delay.", "2021-10-11", 0, 3, null),
        (4, 1, "They are holding it out for their two year anniversary I think", "2021-10-11", 2, 3, 'Anneversary'),
        (5, 1, "It’s Disney + day (Two years since Disney+ launched) so it’s a special occasion", "2021-10-11", 0, 2, 'Anneversary'),
        (6, 1, "it's been killing the box office and has been one of the few films to have some staying power in theaters during the pandemic.", "2021-10-11", 0, 1, 'Pandemic'),
        (7, 1, "Eternals is being released November 5", "2021-10-11", 1, 1, null),
        (8, 1, "I think so that it matches with the release of the Eternals. More HYPE and more marketing so people are more likely to watch it then", "2021-10-11", 0, 2, null),
        (9, 1, "45 day minimum. They are holding off because it has been successful in theaters. It hasn’t even come to theaters in some areas yet", "2021-10-11", 0, 5, null),
        (10, 2, "I think that’s pretty accurate. I think the MCU not having access to hardly any of your A listers was a good thing for them. They laid down a solid foundation for the MCU with a B list appetizer Now we get our A list main course.", "2021-10-13", 10, 1, null),
        (11, 2, "I think you nailed them pretty perfectly.", "2021-10-13", 7, 2, null),
        (12, 2, "If you go by pre-2008: A-List: Hulk Spider-Man B-List: Captain America Daredevil C-List: Black Panther Doctor Strange Iron Man Thor D-List: Ant Man Captain Marvel", "2021-10-13", 3, 3, 'teir-list'),
        (13, 2, "Where would you put X-Men or Fantastic Four in there?", "2021-10-13", 2, 4, null),
        (14, 2, "X-Men were A-List & GOTG were D-List, but it’s a bit hazy when you go by most teams since there’s gray area. I’d personally say FF (B) & Avengers (C).", "2021-10-13", 2, 5, 'teir-list'),
        (15, 2, "Depends on the era. The FF from 1961 to the late 70s was definitely the premier team book at Marvel until Claremont took over the X-Men. Avengers I'd agree were C-listers for most of their existence until Bendis started writing them in the mid-2000s.", "2021-10-13", 2, 1, null),
        (16, 2, "That run inserted two A-Listers (Spider-Man & Wolverine).", "2021-10-13", 2, 5, null),
        (17, 2, "Yep, that's true, I forgot about that.", "2021-10-13", 1, 1, null),
        (18, 2, "how do you measure iconicness? it has be put down in numbers somehow and sales are a good barometer", "2021-10-13", 1, 2, 'iconicness'),
        (19, 2, "My list is your list.", "2021-10-13", 1, 3, null);
--Default sort by newest
SELECT * FROM Comment_tbl;



SELECT * FROM User_tbl;






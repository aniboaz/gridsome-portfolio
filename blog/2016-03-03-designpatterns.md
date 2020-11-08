---
title: לחשוב בתבניות – design patterns
author: Boaz Lederer
type: post
date: 2016-03-03T16:09:21+00:00
url: /blog/2016/03/03/designpatterns/
featured_image: /wp-content/uploads/2016/03/styleguidelibrary.jpg
dsq_thread_id:
  - 4631035343
categories:
  - מאמרים
tags:
  - Design
  - design patterns
  - GUI
  - עיצוב אתרים
  - עיצוב ממשק משתמש

---
<p dir="rtl">
  בזמן האחרון, שמתי לב לצמד מילים שחוזר על עצמו בכל מקום. צמד המילים שעליכם לשים לב אליו הוא &#8211; Design patterns.
</p>

<p dir="rtl">
  למרות מה שמקובל לחשוב על המח המשוחרר והפראי, המח שלנו מתוכנן בחשיבה בתבנית.  הוא <a href="https://en.wikipedia.org/wiki/Pattern_recognition_(psychology)" target="_blank">מזהה תבניות</a>, <a href="http://zellwk.com/blog/why-vertical-rhythms/">מחלק לקבוצות</a> ומתכנן בגנריות. לכן לא צריך לפחד מפיתוח מתודולוגיות של חשיבה תבניתית, גם למוצרים דיגיטליים. בזמן האחרון קראתי הרבה מאמרים בנושא ולכן רציתי לעשות קצת סדר. וגם להסביר איך אני עובד ולמה חשוב לי לייצר תבניות בעצמי.<!--more-->
</p>

<p dir="rtl">
  רוצים לדעת איך אני מעצב &#8220;בתבניות בתאכלס?<a href="#do"> לחצו כאן</a> כדי לדלג על התיאוריה.
</p>

<p dir="rtl">
  אבל למה מתכוונים כשמדברים על תבניות עיצוב? ובכן, תלוי את מי שואלים.
</p>

<p dir="rtl">
  המקור של המושג הזה באדריכלות ובחשיבה התבניתית של Alexander Christopher שהבין ששימוש בתבניות יכול לעשות סדר בבלאגן. נכון, שהוא דיבר על אדריכלות <em>(זה למעשה תגובת נגד ליצירתיות ופוסט מודרניזם)</em> אבל הדברים שאמר ישמשו עוד רבים בעתיד.
</p>

<p dir="rtl">
  הנה דוגמא:
</p>

<blockquote dir="rtl">
  <p dir="ltr">
    In short, no pattern is an isolated entity. Each pattern can exist in the world only to the extent that is supported by other patterns: the larger patterns in which it is embedded, the patterns of the same size that surround it, and the smaller patterns which are embedded in it.
  </p>
</blockquote>

<p dir="rtl">
  כלומר אפשר לחשוב על מערכות מורכבות כמי שעשויות מתבניות שבתוכן עוד תבניות והן עצמן יכולות לשמש תבנית. כך למשל קיר הוא חלק מחדר שחלק מקומה, חלק מבניין, חלק מעיר וכן הלאה.
</p>

<p dir="rtl">
  גם במערכות דשבורדים ואתרים מורכבים אפקט הסינכדוקה של מרכיבים בודדים משפיע על איך שאנחנו תופסים את מכלול המוצר.
</p>

<hr dir="rtl" />

<h3 dir="rtl">
  Brandbook
</h3>

<p dir="rtl">
  הרעיון של ניסוח חוקים לא חדש גם בתחום העיצוב. בתחום המיתוג בעיקר מרבים להשתמש במונח סטיילגייד בשביל לתאר ספר מותג או הנחיות כלליות שלפעמים כולל רק &#8220;דף מסרים&#8221; ולפעמים מתעכב על כל פרט ופרט. מה המקור של המדריכים האלה? האם מדובר רק בכלי מיתוגי?
</p>

<div style="width: 530px" class="wp-caption alignleft">
  <img src="http://campsite-studio.com/wp-content/uploads/2011/07/nasa_brand1_07242011.jpg" alt="" width="520" height="340" />
  
  <p class="wp-caption-text">
    ספר החוקים של נאסא
  </p>
</div>

<p dir="rtl">
  ממש לא. אחד המקורות הראשונים של חוקים שהם יותר מפרקטיים למעצבים הוצג על ידי תאגיד ממשלתי גדול שכולכם מכירים. ב1976 נאסא (סוכנות החלל האמריקאית) ניסחה את הקובץ <a href="https://www.nasa.gov/sites/default/files/atoms/files/nasa_graphics_manual_nhb_1430-2_jan_1976.pdf">הזה</a> כחלק ממהלך של ייעול שנועד למנוע משרירותיות עיצובית להביא לטעויות. לחוסר מחשבה או תכנון שכזה יש פוטנציאל נזק רב, ולזה קוראים <em>anti-pattern</em>. האנטי-תבנית הוא הסיבה להשתמש בספר חוקים למוצר, כי הוא מונע מהכאוס לגרום להחלטות שרירותיות וכך מונע בעיות. החשיבה ללא הכוונה בארגונים גדולים כמו נאסא היא קלה יותר להבנה. משום שכל טעות או חוסר עקביות יכולה לגבות מחיר כבד. (כן, גם התרסקויות). החשיבה האנליטית והמדעית לא פוסחת גם על הספר.
</p>

<h3 dir="rtl">
  סטיילגייד
</h3>

<p dir="rtl">
  נחזור לפיתוח מוצרים דיגיטלים. כאן קיים שימוש בסטיילגיידס מעבר לצרכי מיתוג כמו למשל &#8211; <a href="https://www.behance.net/gallery/7226653/Medium-Brand-Development">medium</a> (לדוגמא). הפירוט של המותג הגדיר גם חוקיות וכללי עיצוב בתוך האתר וגם חילק אותו למרכיבים.
</p>

<div id="attachment_1118" style="width: 490px" class="wp-caption alignnone">
  <img class="wp-image-1118 size-thumbnail" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2016/02/Screenshot_9-480x640.png" alt="Frontify" width="480" height="640" />
  
  <p class="wp-caption-text">
    דוגמא לסטיילגייד במערכת frontify.
  </p>
</div>

<p dir="rtl">
  חשוב להבין שלא מדובר בכלי עיצובי בלבד. המגמה הזאת קיימת גם בצד של מפתחי האתרים ומנהלי המוצר.
</p>

<p dir="rtl">
  במאמר <a href="https://24ways.org/2012/design-systems/">הזה </a>של לורה קלבג (Laura kalbag)  היא חיפשה לנסח חוקים כדי לנסות ולייצר חוויה <strong>אחידה</strong> כמה שיותר בתוך מוצרים רספונסיביים. (המאמר יצא ב2012, כשהבינו שכמות המכשירים והפורמטים רק גדלים כל הזמן). במטרה לייצר אחידות, יש להגדיר חוקי עיצוב שישמרו על קוהרנטיות. חוקים אלו נקראים .Design systems
</p>

<p dir="rtl">
  <a href="http://bradfrost.com/blog/post/atomic-web-design/">brad frost הגדיל ועשה</a> וניסח את הכללים למרכיבים יותר מורכבים מרק צבע או טיפוגרפיה.
</p>

<p dir="rtl">
  בהשראת הטבלא הכימית המחזורית הוא ניסח את atomic web, בעיקרון <a href="http://demo.patternlab.io/">פירק את הדף לקומפוננטות</a> בשביל לדעת מעבר לאיך לנסח אותם בעיצוב סטיילגייד. אלא כהליך מחשבה שמבוסס על אותם &#8220;מולקולות&#8221;. למשל &#8220;שדה חיפוש&#8221; &#8220;תפריט ניווט&#8221; וכו&#8217;. מזכיר לכם משהו? נכון, סינכדוקה, בדיוק כמו אצל אלכסנדר כריסטופר. בעוד במוצר קטן ופשוט אין טעם לנסח חוקים כאלו, במוצר גדול ומורכב זה יכול להיות הכרח.
</p>

<p dir="rtl">
  אבל ההבדל הגדול הוא בקו מחשבה ש&#8221;בונה&#8221; את המוצרים תוך מחשבה על תבניות. הנה למשל, סטודיו <a href="https://www.artefactgroup.com/content/work/tableau/" target="_blank">שמפרט איך הוא עבד </a>על ידי הגדרה של אלמנטים ותבניות בשביל לבנות פרוייקט גדול ומורכב.
</p>

<p dir="rtl">
  הנה הספרייה של האלמנטים בa list apart:
</p>

<p dir="rtl">
  <a href="http://patterns.alistapart.com/">http://patterns.alistapart.com/</a>
</p>

<div id="attachment_1142" style="width: 323px" class="wp-caption alignright">
  <img class="size-full wp-image-1142" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2016/02/datepicker.jpg" alt="דוגמא לתבנית - datepicker" width="313" height="314" />
  
  <p class="wp-caption-text">
    דוגמא לתבנית &#8211; datepicker
  </p>
</div>

<p dir="rtl">
  הליך המחשבה הזה, הוא מה שמאפייני UX מכנים ui patterns.
</p>

<p dir="rtl">
  הנה <a href="http://pttrns.com/" target="_blank">שני</a> <a href="http://uigarage.net/" target="_blank">אתרים</a> שמבהירים את זה במובייל. אלו כבר תבניות של מרכיבים בתוך אתרים או אפליקציות  שכולנו מכירים ומזהים, גם אם לא תמיד מבחינים בתבנית. למשל תבנית checkout לאתרי ecommerce. חשוב להבין שהרעיון הזה הוא לא רק מקור השראה ענק(בעיני) למעצבים, אלא דרך חשיבה שהרבה פעמים דווקא <strong>כן יכולה להוביל ליצירתיות.</strong> כך למשל, ניתן להחליף ולשחק בין תבניות עיצוב שונות. כמו שמפורט ב<a href="http://danielmall.com/articles/content-display-patterns/" target="_blank">מאמר הזה של דן מול</a>.
</p>

<h3 dir="rtl">
  frameworks
</h3>

<p dir="rtl">
  למשל bootstrap, הם התשתית שעליו בונים את המוצר, וככאלה גם מכילים בתוכם את התבניות והכללים.  הכלים האלו הם חלק מהסיבות להפיכת הרשת &#8220;מודולרית וחד גונית יותר. מצד שני, הרבה פעמים, נוכל לחסוך הרבה כאב ראש ומאמץ מיותר, אם במקום &#8220;להמציא את הגלגל&#8221; נשאן על מערכת מוכחת שעובדת.
</p>

<p dir="rtl">
  כך לדוגמא, לאחרונה wordpress שחררו<a href="https://github.com/Automattic/theme-components/tree/master/components" target="_blank"> מערכת תמות מבוססות תבנית</a> כדי לעזור להאיץ פיתוח של תבניות. המבנה המודולרי הזה הוא מה שעומד מאחורי מערכות אוטומציה ליצירת אתרים כמו webflow או <a href="http://www.wix.com" target="_blank">wix</a>.
</p>

<div id="attachment_1114" style="width: 856px" class="wp-caption aligncenter">
  <img class="wp-image-1114 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2016/01/google.png" alt="google materials guidlines" width="846" height="530" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2016/01/google.png 846w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2016/01/google-595x373.png 595w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2016/01/google-768x481.png 768w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2016/01/google-700x439.png 700w" sizes="(max-width: 846px) 100vw, 846px" />
  
  <p class="wp-caption-text">
    google materials guidlines
  </p>
</div>

<p dir="rtl">
  לחלק מאותם מערכות כמו למשל, material design &#8211; יש &#8220;<a href="https://www.google.com/design/spec/patterns/">ספר חוקים</a>&#8221; עם דגש רב לעיצוב ולמרכיבים תבניתיים. התשתיות האלה יוצרות מערכות גנריות שמאחוריהן הרבה הגיון וחוקיות, ולכן בדרך כלל ייקח פחות זמן לתכנן ולבנות בעזרתן.
</p>

<hr dir="rtl" />

<h2 id="dont" dir="rtl">
  לשבור את התבנית
</h2>

<p dir="rtl">
  אז מה החסרון הגדול של עבודה בתבניות?
</p>

<p dir="rtl">
  אם לחשוב על זה בפשטות, תבניות הם סוג של פתרון מודולרי גנרי שלא מספק גמישות ויצירתיות, שלעיתים רבות נרצה. חשבו על מוצר שלכם כמכונית. איך הייתם רוצים שהוא ייראה? נכון שכל המכוניות מעוצבות &#8220;<a href="https://medium.com/@yugenelee/everything-looks-the-same-part-1-8c489259697#.l5pc6x447" target="_blank">אותו דבר</a>&#8221; ל<a href="https://louderthanten.com/articles/story/design-machines" target="_blank">כולם יש הגה וארבע גלגלים</a> כי את כולם צריכים לתפעל באותו אופן.מצד שני, יש סיבה שמכנויות יוקרה ורכבי אספנות עדיין קיימים. אבל למה שאכתוב סתם הרבה מילים כש<a href="http://createmagazine.co.il/2015/12/08/%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%91%D7%98%D7%9E%D7%A4%D7%9C%D7%98%D7%99%D7%9D-%D7%9C%D7%9E%D7%94-%D7%9B%D7%9C-%D7%94%D7%A2%D7%99%D7%A6%D7%95%D7%91%D7%99%D7%9D-%D7%A0%D7%A8%D7%90%D7%99%D7%9D-%D7%90/" target="_blank">כתבו </a>על זה <a href="https://www.smashingmagazine.com/2016/01/is-the-internet-killing-creativity/" target="_blank">כל כך טוב אחרים.</a>
</p>

<p dir="rtl">
  בגדול &#8211; המעצב אלי שיף <a href="http://humaninterfaceguidelines.tumblr.com/post/139807433410/elischiff">הגדיר את זה טוב</a>.
</p>

<blockquote dir="rtl">
  <p dir="ltr">
    The two worst things a designer can do are either uncritically accept the status quo, or flippantly renounce long-held traditions.
  </p>
</blockquote>

<p dir="rtl">
  אני בן אדם מאד יצירתי, ולכן השימוש בחוקים ותבניות היא חיונית כדי לייצר מוצרים טובים יותר, לנקודת הפתיחה שלי. בכל זאת, בגלל הסכנות של הטעויות הנפוצות של שימוש יתר בתבניות, קודם כל שאלו את עצמיכם &#8211; מה המטרה שלי? מה אני מעצב? &#8211; לא איזה מוצר אלא באיזה שלב אתם? מובן שבשלב של חיפוש ו&#8221;בריינסטורמינג&#8221; לא כדאי להתעכב או לחסום את היצירתיות. מצד שני, איפשהו לפני שלב הפיתוח בדרך כלל נרצה &#8220;להוריד את המוצר לקרקע&#8221;.  אז איך אני עושה את זה?
</p>

<h2 id="do" dir="rtl">
  תאכלס
</h2>

<ul dir="rtl">
  <li style="text-align: right;">
    עובדים עם sketch? אין בעיה, <a href="http://blog.invisionapp.com/atomic-design-principles/">הנה מאמר </a>שמפרט איך לעבוד בsketch.
  </li>
  <li style="text-align: right;">
    עובדים עם invision? <a href="http://webdesign.tutsplus.com/tutorials/how-to-conduct-an-interface-inventory-with-invision--cms-25792">הנה דרך לעבוד </a>עם כלי לוחות ההשראה שלהם להגדרת תבניות עיצוב.
  </li>
</ul>

<h3 dir="rtl">
  איך לעצב בתבניות עם פוטושופ
</h3>

<p dir="rtl">
  קודם כל לעבוד לפי framework וגריד קיים. עבור מי מעוצב המסך? באיזה מסך יראו אותו? לאחר שהבנו את השאלות הבסיסיות נוכל לדעת גם איזה תבנית יכולה להתאים למוצר.
</p>

<p dir="rtl">
  אני משתמש ב<a href="http://guideguide.me/">גיידגייד</a> כדי להגדיר במהירות גרידים מוכנים מראש. חשוב גם להבין באיזה רזולוציה וגדלים תעבדו.(תלוי אם המסך מאופיין או שאתם צריכים לאפיין אותו.)
</p>

<p dir="rtl">
  כמו שכבר אמרתי, אני לא מאמין שחשיבה תבניתית מתאימה לשלב של &#8220;חיפוש&#8221; סגנון או קונספט עיצובי.
</p>

<p dir="rtl">
  לכן בניית התבניות מתחילה בדיעבד &#8211; על ידי הכנת סוג של סטיילגייד. מפרקים את המוצר תמיד לגורמים &#8211; שומרים על אחידות. אפשר בהחלט להכין קובץ מסודר שאוסף את המרכיבים השונים.
</p>

<p dir="rtl">
  <img class="alignright size-full wp-image-1110" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2016/01/Screenshot_5.png" alt="Screenshot_5" width="377" height="373" /><a href="http://www.adobe.com/il_en/creativecloud/libraries.html">libraries</a> &#8211; הכלי הזה מאפשר לי לאתר ולהגדיר מרכיבים ותבניות וכך לחזור אחריהם בצורה אחידה תוך כדי עבודה. הדוגמא הבולטת היא, לאחר שהגדרתי את פלטת הצבעים, לדגום אותה ל&#8221;ספרייה&#8221; וכך אוכל בלחיצת כפתור ליישם את הצבע על כל אלמנט.
</p>

<p dir="rtl">
  אפשר גם לעצב סטייל לכל פרט קטן, ולשמור אותו בהתאם וגם להעלות קבצים שחוזרים על עצמם לענן וכך לשלוף אותם בדפים שונים (פיצ&#8217;ר מעט יותר בעייתי &#8211; כי הוא זמין רק לפי יוזר).
</p>

<p dir="rtl">
  הכלי לא חף מבעיות, ויש לא מעט עבודה שחורה, למשל עם נדגום טקסט נצטרך לשנות בעצמנו את שם האובייקט שלקחנו כדי לא להתבלבל. אבל בסיום נוכל להעלות ולשתף את הספרייה עם מפתח ברשת.
</p>

<p dir="rtl">
  רצוי לבחור חלוקה שקשורה לפיתוח המוצר למשל &#8211; מוצר אינטרנט נפרק לH1, H2 ונגדיר לפי השפה המקובלת, במוצר לאייפון נגדיר &#8220;bottom drawer&#8221; וכו&#8217;. גם סדר של הקבצים והשכבות עוזר לייצר תכנית עבודה מסודרת יותר. התוסף <a href="http://www.klaia.com/Renamy/">Renamy</a> עוזר להכניס סדר לשמות גנריים ומכניס הגיון לקובץ שלא יהיה מורכב מ&#8221;ריבועים ועיגולים copy 2&#8243;&#8230;
</p>

<p dir="rtl">
  כמובן שעבודה עם UI kit מוכן או מרכיבים שמורים שלכם תייצר תהליך מהיר ומבוסס יותר, בהנחה שאתם לא &#8220;כבולים&#8221; לעבוד תחת התבניות האלה.
</p>

<h3 dir="rtl">
  איך לעצב בתבניות עם adobe illustrator
</h3>

<p dir="rtl">
  מלבד מה שכבר כתבתי כאן, על libraries. לillustrator כמה פיצ&#8217;רים בולטים שעוזרים לו בעבודה עם תבניות. קודם כל symbols לעבודה עם אלמנטים שחוזרים על עצמם.למשל לייצור אלמנטים וקומפוננטות. שימוש נוסף הוא Graphic styles שמאפשר להחיל בקלות סגנונות, כמו מצבים של כפתורים למשל.
</p>

<hr dir="rtl" />

<h4 dir="rtl">
  לקריאה נוספת
</h4>

<p dir="rtl">
  כלי מעולה לעבודה עם מפתחים והגדרה של סטיילגייד &#8211;<a href="https://frontify.com/">frontify.com</a>
</p>

<p dir="rtl">
  <a href="http://labs.invisionapp.com/craft" target="_blank">craft</a> יש גם את הכלי הזה <em>-למישהו יצא לעבוד איתו?</em>
</p>

<p dir="rtl">
  להשראה, מומלץ לראות עוד סטיילגיידס ב &#8211; <a href="http://styleguides.io/">http://styleguides.io/</a>
</p>

<p dir="rtl">
  לקריאה נוספת &#8211; אני באמת ממליץ את המאמר <a href="https://www.smashingmagazine.com/2016/01/is-the-internet-killing-creativity/" target="_blank">הזה</a>, שמדבר על יצירתיות, תבניות ועוד הרבה דברים.
</p>
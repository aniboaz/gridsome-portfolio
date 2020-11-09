---
title: Flatzilla
author: Boaz Lederer
type: post
date: 2014-12-02T23:06:22+00:00
url: /blog/2014/12/03/flatzilla/
featured_image: /wp-content/uploads/2014/11/flatzillaicons-1.gif
dsq_thread_id:
  - 3290894087
categories:
  - work
tags:
  - Design
  - Filezilla
  - ftp
  - GUI
  - icon design
  - ui review
  - איפיון ממשק
  - עיצוב ממשק משתמש

---
<h1 dir="rtl" style="text-align: right;">
  עיצוב אייקונים לתכנת קוד פתוח FTP &#8211; filezilla.
</h1>

<p dir="rtl" style="text-align: right;">
  בעולם הדיגיטל ההתיישנות היא דבר די מהיר, חלק גדול מהעיצוב מתבסס על טרנדים שבדומה לעולם האופנה נוצרים בצורה מלאכותית בכדי למכור את המוצר החדש. בגלל שיטה זו המוצר הותיק נדרש רבות להתאים את עצמו מחדש למצב.התחרות בשוק היא קשה, ולכן משקיעים מאמצים רבים(בפיתוחים ועיצובים חדשים) ומבדקי משתמשים כדי לבדוק את הפיתוחים האלו. כל זאת נכון בעיקר בתכנות מסחריות. אבל <a title="filezilla-project.org/" href="https://filezilla-project.org/" target="_blank">filezilla</a> הייתה בסך הכל<a title="ויקיפדיה" href="http://en.wikipedia.org/wiki/FileZilla#History" target="_blank"> תרגיל במדעי המחשב</a> שיצא משליטה, וכל העדכונים שלו מבוססי מתנדבים שהם כמעט לגמרי אותה הקהילה שהיא גם קהילת המשתמשים שלו.<br /> החלטתי לעצב מחדש את סדרת האייקונים של תכנת הFTP Filezilla. כאמור, התכנה היא קוד פתוח, וניתן לעצב ולשנות את האייקונים בתוך הממשק בצורה יחסית פשוטה (בדומה לתכנות נוסטלגיות אחרות)<br /> בכדי לעשות זאת, תחילה הסתכלתי במה שקיים, בכדי לנסות להכנס לראש של התכנה ולהבין את הפונקציות השונות.
</p>

<p dir="rtl" style="text-align: right;">
  The original theme by Tim kosse:
</p>

<div data-carousel-extra='{"blog_id":1,"permalink":"http:\/\/www.aniboaz.co.il\/Blog\/blog\/2014\/12\/03\/flatzilla\/"}' class="tiled-gallery type-rectangular" data-original-width="1600">
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/find/"><img data-attachment-id="317" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="find" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find.png" width="1059" height="1059" align="left" title="find" /></a>
        
        <div class="tiled-gallery-caption">
          Find
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/filter/"><img data-attachment-id="352" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="filter" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter.png" width="528" height="527" align="left" title="filter" /></a>
        
        <div class="tiled-gallery-caption">
          filter
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/synchronize/"><img data-attachment-id="336" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="synchronize" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize.png" width="528" height="528" align="left" title="synchronize" /></a>
        
        <div class="tiled-gallery-caption">
          synchronize
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/compare/"><img data-attachment-id="346" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/compare.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="compare" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/compare.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/compare.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/compare.png" width="527" height="528" align="left" title="compare" /></a>
        
        <div class="tiled-gallery-caption">
          compare
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/sitemanager/"><img data-attachment-id="329" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/sitemanager.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="sitemanager" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/sitemanager.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/sitemanager.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/sitemanager.png" width="528" height="528" align="left" title="sitemanager" /></a>
        
        <div class="tiled-gallery-caption">
          sitemanager
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/server/"><img data-attachment-id="328" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/server.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="server" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/server.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/server.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/server.png" width="528" height="528" align="left" title="server" /></a>
        
        <div class="tiled-gallery-caption">
          server
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/uploadadd/"><img data-attachment-id="340" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/uploadadd.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="uploadadd" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/uploadadd.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/uploadadd.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/uploadadd.png" width="528" height="527" align="left" title="uploadadd" /></a>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/upload/"><img data-attachment-id="339" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/upload.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="upload" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/upload.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/upload.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/upload.png" width="528" height="528" align="left" title="upload" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/downloadadd/"><img data-attachment-id="349" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/downloadadd.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="downloadadd" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/downloadadd.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/downloadadd.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/downloadadd.png" width="1059" height="1059" align="left" title="downloadadd" /></a>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/blog/2014/12/03/flatzilla/download/"><img data-attachment-id="348" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="download" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download.png" width="527" height="528" align="left" title="download" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/speedlimits/"><img data-attachment-id="334" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/speedlimits.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="speedlimits" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/speedlimits.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/speedlimits.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/speedlimits.png" width="528" height="528" align="left" title="speedlimits" /></a>
        
        <div class="tiled-gallery-caption">
          speedlimits
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/localtreeview/"><img data-attachment-id="320" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/localtreeview.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="localtreeview" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/localtreeview.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/localtreeview.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/localtreeview.png" width="528" height="528" align="left" title="localtreeview" /></a>
        
        <div class="tiled-gallery-caption">
          local tree view
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/remotetreeview/"><img data-attachment-id="327" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/remotetreeview.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="remotetreeview" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/remotetreeview.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/remotetreeview.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/remotetreeview.png" width="1059" height="1059" align="left" title="remotetreeview" /></a>
        
        <div class="tiled-gallery-caption">
          remote tree view
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/logview/"><img data-attachment-id="322" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/logview.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="logview" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/logview.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/logview.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/logview.png" width="528" height="527" align="left" title="logview" /></a>
        
        <div class="tiled-gallery-caption">
          logview
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/refresh/"><img data-attachment-id="326" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/refresh.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="refresh" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/refresh.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/refresh.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/refresh.png" width="528" height="528" align="left" title="refresh" /></a>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/cancel/"><img data-attachment-id="345" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/cancel.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="cancel" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/cancel.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/cancel.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/cancel.png" width="527" height="528" align="left" title="cancel" /></a>
        
        <div class="tiled-gallery-caption">
          cancel
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/reconnect/"><img data-attachment-id="325" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/reconnect.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="reconnect" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/reconnect.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/reconnect.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/reconnect.png" width="528" height="528" align="left" title="reconnect" /></a>
        
        <div class="tiled-gallery-caption">
          reconnect
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/queueview/"><img data-attachment-id="324" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/queueview.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="queueview" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/queueview.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/queueview.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/queueview.png" width="528" height="528" align="left" title="queueview" /></a>
        
        <div class="tiled-gallery-caption">
          queueview
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/processqueue/"><img data-attachment-id="323" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/processqueue.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="processqueue" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/processqueue.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/processqueue.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/processqueue.png" width="528" height="527" align="left" title="processqueue" /></a>
        
        <div class="tiled-gallery-caption">
          process &#8211; queue
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/disconnect/"><img data-attachment-id="347" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/disconnect.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="disconnect" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/disconnect.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/disconnect.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/disconnect.png" width="528" height="528" align="left" title="disconnect" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/lock/"><img data-attachment-id="321" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/lock.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="lock" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/lock.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/lock.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/lock.png" width="1059" height="1059" align="left" title="lock" /></a>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/file/"><img data-attachment-id="350" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/file.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="file" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/file.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/file.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/file.png" width="527" height="528" align="left" title="file" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/folderclosed/"><img data-attachment-id="319" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderclosed.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="folderclosed" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderclosed.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderclosed.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderclosed.png" width="528" height="528" align="left" title="folderclosed" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/bookmark/"><img data-attachment-id="344" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/bookmark.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="bookmark" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/bookmark.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/bookmark.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/bookmark.png" width="528" height="528" align="left" title="bookmark" /></a>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/folder/"><img data-attachment-id="318" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folder.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="folder" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folder.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folder.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folder.png" width="1059" height="1059" align="left" title="folder" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/ascii/"><img data-attachment-id="341" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/ascii.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="ascii" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/ascii.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/ascii.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/ascii.png" width="528" height="527" align="left" title="ascii" /></a>
        
        <div class="tiled-gallery-caption">
          ascii
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/auto/"><img data-attachment-id="342" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/auto.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="auto" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/auto.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/auto.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/auto.png" width="528" height="528" align="left" title="auto" /></a>
        
        <div class="tiled-gallery-caption">
          auto (binary or ascii)
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 1591px;">
    <div class="gallery-group images-1" style="width: 1595px; height: 1595px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/binary/"><img data-attachment-id="343" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/binary.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="binary" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/binary.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/binary.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/binary.png" width="1591" height="1591" align="left" title="binary" /></a>
        
        <div class="tiled-gallery-caption">
          binary
        </div>
      </div>
    </div>
  </div>
</div>

<p dir="rtl" style="text-align: right;">
  הגרסא הראשונה שנוצרה על ידי המפתח הראשון של FZ<br /> נעשתה כמו בדרך כלל כמעט לגמרי מתוך תמונות שבלוניות (ראה &#8211; FINDׂ) וחלקה צויירה בצורה בסיסית(האייקונים של Q וR לדוגמא).<br /> האייקנוים גם מאד קטנים כמובן, אבל באופן כללי ניתן לומר שהתכנה שמיועדת למפתחים לא נותנת משקל רב לצד בגרפי כי אין זה בראש העדיפיות <strong>של המשתמשים שלה</strong>. עיקר השימוש בתכנה בתצוגה של ניהול קבצים  &#8211; במחשב המקומי וגם בשרת המרוחק &#8211; כלומר באתר האינטרנט.
</p>

<pre dir="rtl">האם יש בסמלים הגיון מסוים?</pre>

<p dir="rtl" style="text-align: right;">
  בהמשך בהדרגה, עם הפצת התכנה תחת קוד פתוח, החלו משתמשים ברחבי העולם לשדרג את העיצובים הקיימים באייקונים דומים או זהים ברזולוציות יותר גבוהות.
</p>

<p dir="rtl" style="text-align: right;">
  כך לדוגמא: הגרסא הזו של <a title="Brian Lukis" href="https://plus.google.com/u/0/116328287633957791126/posts">Brian Lukis</a>, וניתן לראות, שכמעט כולה הגדלה וריטוש של הסמלים המקוריים.
</p>

<p dir="rtl" style="text-align: right;">
  the next versions
</p>

<div data-carousel-extra='{"blog_id":1,"permalink":"http:\/\/www.aniboaz.co.il\/Blog\/blog\/2014\/12\/03\/flatzilla\/"}' class="tiled-gallery type-rectangular" data-original-width="1600">
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/synchronize-2/"><img data-attachment-id="385" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="synchronize" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize1.png" width="1059" height="1059" align="left" title="synchronize" /></a>
        
        <div class="tiled-gallery-caption">
          synchronize
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/speedlimits-2/"><img data-attachment-id="383" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/speedlimits1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="speedlimits" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/speedlimits1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/speedlimits1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/speedlimits1.png" width="528" height="527" align="left" title="speedlimits" /></a>
        
        <div class="tiled-gallery-caption">
          speed limits
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/sitemanager-2/"><img data-attachment-id="382" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/sitemanager1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="sitemanager" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/sitemanager1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/sitemanager1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/sitemanager1.png" width="528" height="528" align="left" title="sitemanager" /></a>
        
        <div class="tiled-gallery-caption">
          sitemanager
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/server-2/"><img data-attachment-id="380" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/server1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="server" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/server1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/server1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/server1.png" width="527" height="528" align="left" title="server" /></a>
        
        <div class="tiled-gallery-caption">
          server
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/ascii-2/"><img data-attachment-id="355" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/ascii1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="ascii" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/ascii1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/ascii1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/ascii1.png" width="528" height="528" align="left" title="ascii" /></a>
        
        <div class="tiled-gallery-caption">
          ascii
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/auto-2/"><img data-attachment-id="356" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/auto1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="auto" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/auto1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/auto1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/auto1.png" width="528" height="528" align="left" title="auto" /></a>
        
        <div class="tiled-gallery-caption">
          auto
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/binary-2/"><img data-attachment-id="357" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/binary1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="binary" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/binary1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/binary1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/binary1.png" width="528" height="527" align="left" title="binary" /></a>
        
        <div class="tiled-gallery-caption">
          binary
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/cancel-2/"><img data-attachment-id="359" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/cancel1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="cancel" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/cancel1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/cancel1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/cancel1.png" width="528" height="528" align="left" title="cancel" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/bookmark-2/"><img data-attachment-id="358" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/bookmark1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="bookmark" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/bookmark1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/bookmark1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/bookmark1.png" width="1059" height="1059" align="left" title="bookmark" /></a>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/folderclosed-2/"><img data-attachment-id="369" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderclosed1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="folderclosed" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderclosed1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderclosed1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderclosed1.png" width="527" height="528" align="left" title="folderclosed" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/folder-2/"><img data-attachment-id="367" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folder1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="folder" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folder1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folder1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folder1.png" width="528" height="528" align="left" title="folder" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/refresh-2/"><img data-attachment-id="378" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/refresh1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="refresh" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/refresh1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/refresh1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/refresh1.png" width="528" height="528" align="left" title="refresh" /></a>
        
        <div class="tiled-gallery-caption">
          refresh
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/reconnect-2/"><img data-attachment-id="377" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/reconnect1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="reconnect" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/reconnect1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/reconnect1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/reconnect1.png" width="1059" height="1059" align="left" title="reconnect" /></a>
        
        <div class="tiled-gallery-caption">
          reconnect
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/disconnect-2/"><img data-attachment-id="361" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/disconnect1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="disconnect" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/disconnect1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/disconnect1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/disconnect1.png" width="528" height="527" align="left" title="disconnect" /></a>
        
        <div class="tiled-gallery-caption">
          disconnect
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/filter-2/"><img data-attachment-id="365" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="filter" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter1.png" width="528" height="528" align="left" title="filter" /></a>
        
        <div class="tiled-gallery-caption">
          filter
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/find-2/"><img data-attachment-id="366" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="find" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find1.png" width="527" height="528" align="left" title="find" /></a>
        
        <div class="tiled-gallery-caption">
          find
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/remotetreeview-2/"><img data-attachment-id="379" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/remotetreeview1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="remotetreeview" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/remotetreeview1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/remotetreeview1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/remotetreeview1.png" width="528" height="528" align="left" title="remotetreeview" /></a>
        
        <div class="tiled-gallery-caption">
          remote tree view
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/localtreeview-2/"><img data-attachment-id="372" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/localtreeview1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="localtreeview" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/localtreeview1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/localtreeview1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/localtreeview1.png" width="528" height="528" align="left" title="localtreeview" /></a>
        
        <div class="tiled-gallery-caption">
          local tree view
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/logview-2/"><img data-attachment-id="374" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/logview1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="logview" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/logview1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/logview1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/logview1.png" width="528" height="527" align="left" title="logview" /></a>
        
        <div class="tiled-gallery-caption">
          log view
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/folderup/"><img data-attachment-id="370" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderup.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="folderup" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderup.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderup.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/folderup.png" width="528" height="528" align="left" title="folderup" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/lock-2/"><img data-attachment-id="373" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/lock1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="lock" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/lock1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/lock1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/lock1.png" width="1059" height="1059" align="left" title="lock" /></a>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/download-2/"><img data-attachment-id="362" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="download" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download1.png" width="527" height="528" align="left" title="download" /></a>
        
        <div class="tiled-gallery-caption">
          download
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/downloadadd-2/"><img data-attachment-id="363" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/downloadadd1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="downloadadd" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/downloadadd1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/downloadadd1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/downloadadd1.png" width="528" height="528" align="left" title="downloadadd" /></a>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/uploadadd-2/"><img data-attachment-id="354" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/uploadadd1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="uploadadd" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/uploadadd1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/uploadadd1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/uploadadd1.png" width="528" height="528" align="left" title="uploadadd" /></a>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 794px;">
    <div class="gallery-group images-1" style="width: 797px; height: 798px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/upload-2/"><img data-attachment-id="353" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/upload1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="upload" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/upload1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/upload1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/upload1.png" width="793" height="794" align="left" title="upload" /></a>
        
        <div class="tiled-gallery-caption">
          upload
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 798px; height: 798px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/file-2/"><img data-attachment-id="364" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/file1.png" data-orig-size="48,48" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="file" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/file1.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/file1.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/file1.png" width="794" height="794" align="left" title="file" /></a>
      </div>
    </div>
  </div>
</div>

<h2 dir="rtl" style="text-align: right;">
  main issues:
</h2>

<hr dir="rtl" />

<h2 dir="rtl" style="text-align: right;">
  New Vs. Old
</h2>

<p dir="rtl" style="text-align: right;">
  כל עיצוב מחדש של ממשק קיים מביא עימו את השאלה &#8211; האם לעצב מחדש או להתבסס על העיצוב הקיים. מצד אחד העיצוב הקיים מוכר למשתמשים הקבועים של התכנה, מצד שני, טעויות בעיצוב יכולות לקרות ,ולפגוע בעיקר במשתמשים החדשים. איך ניתן לדעת מה ניתן לשנות ומה לא?
</p>

<p dir="rtl" style="text-align: right;">
  התשובה תלויה לא רק במשתמשים אלה בתרחישי השימוש השונים.
</p>

<p dir="rtl" style="text-align: right;">
  נאמר לFZ יש משתמש שזה עתה הוריד את התכנה &#8211; עליו ללמוד אותה לראשונה. מצד שני גם המשתמש הותיק לאחר העדכון אמור ללמוד את הסמלים השונים (במיוחד כשיש שינויי מיקום &#8211; מה שאין פה).
</p>

<p dir="rtl" style="text-align: right;">
  המטרה שלי הייתה לנסות ולהשאן כמה שיותר על העיצוב המקורי &#8211; ולקחת משם את ההגיון הבסיסי שהמשתמשים הותיקים אוהבים. י ככה שברוב הסמלים העבודה הייתה התאמה סגנונית בלבד. (כמו למשל: cancel, bookmark, folder, speedlimit etc)
</p>

<p dir="rtl" style="text-align: right;">
  חד עם זאת, האייקון צריך להיות מובן וכדי לוודא את זה, החלטתי להתבסס בעיקר על קונבנציות, ממש כמו השבלונות שהשתמש בהם טים.
</p>

<p dir="rtl" style="text-align: right;">
  כך למשל ארבעת הסמלים שמסמלים את הפעולות למשתמשים המתקדמים יותר יכלו לקבל אינטרפטציה חופשית יותר, אבל לי היה חשוב בגלל שאלו פעולות מתקדמות לפשט אותם לקונוטציות בסיסיות מובנות. (חוץ מזה אהבתי את המשקפת, ולכן חזרתי אליה)
</p>

<div data-carousel-extra='{"blog_id":1,"permalink":"http:\/\/www.aniboaz.co.il\/Blog\/blog\/2014\/12\/03\/flatzilla\/"}' class="tiled-gallery type-rectangular" data-original-width="1600">
  <div class="gallery-row" style="width: 1595px; height: 1059px;">
    <div class="gallery-group images-1" style="width: 1063px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/find/"><img data-attachment-id="317" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="find" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/find.png" width="1059" height="1059" align="left" title="find" /></a>
        
        <div class="tiled-gallery-caption">
          Find
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-2" style="width: 532px; height: 1063px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/blog/2014/12/03/flatzilla/find-3/"><img data-attachment-id="415" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/find.png" data-orig-size="200,200" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="find" data-image-description="<p>שומר על העיצוב המקורי</p>
" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/find.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/find.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/find.png" width="528" height="527" align="left" title="find" /></a>
        
        <div class="tiled-gallery-caption">
          Find
        </div>
      </div>
      
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/synchronize/"><img data-attachment-id="336" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="synchronize" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/synchronize.png" width="528" height="528" align="left" title="synchronize" /></a>
        
        <div class="tiled-gallery-caption">
          synchronize
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 528px;">
    <div class="gallery-group images-1" style="width: 531px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/blog/2014/12/03/flatzilla/synchronize-3/"><img data-attachment-id="419" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/synchronize.png" data-orig-size="200,200" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="synchronize" data-image-description="<p>עיצוב חדש- ממחיש את ההקשר באמצעות צבע</p>
" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/synchronize.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/synchronize.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/synchronize.png" width="527" height="528" align="left" title="synchronize" /></a>
        
        <div class="tiled-gallery-caption">
          synchronize
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/filter/"><img data-attachment-id="352" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="filter" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/filter.png" width="528" height="528" align="left" title="filter" /></a>
        
        <div class="tiled-gallery-caption">
          filter
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 532px; height: 532px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/blog/2014/12/03/flatzilla/filter-3/"><img data-attachment-id="414" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/filter.png" data-orig-size="200,200" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="filter" data-image-description="<p>אייקון סטנדרטי</p>
" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/filter.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/filter.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/filter.png" width="528" height="528" align="left" title="filter" /></a>
        
        <div class="tiled-gallery-caption">
          filter
        </div>
      </div>
    </div>
  </div>
  
  <div class="gallery-row" style="width: 1595px; height: 794px;">
    <div class="gallery-group images-1" style="width: 797px; height: 798px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/compare/"><img data-attachment-id="346" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/compare.png" data-orig-size="16,16" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="compare" data-image-description="" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/compare.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/compare.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/compare.png" width="793" height="794" align="left" title="compare" /></a>
        
        <div class="tiled-gallery-caption">
          compare
        </div>
      </div>
    </div>
    
    <div class="gallery-group images-1" style="width: 798px; height: 798px;">
      <div class="tiled-gallery-item tiled-gallery-item-large">
        <a href="http://www.aniboaz.co.il/Blog/blog/2014/12/03/flatzilla/compare-3/"><img data-attachment-id="412" data-orig-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/compare.png" data-orig-size="200,200" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="compare" data-image-description="<p>קונוטציה מעבירה מסר</p>
" data-medium-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/compare.png" data-large-file="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/compare.png" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/compare.png" width="794" height="794" align="left" title="compare" /></a>
        
        <div class="tiled-gallery-caption">
          compare
        </div>
      </div>
    </div>
  </div>
</div>

<h2 dir="rtl" style="text-align: right;">
  Server
</h2>

<p dir="rtl" style="text-align: right;">
  עיקרון חשוב בעיצוב ממשק, הוא אחידות וקונספט קוהרנטי שיעבור דרך העיצוב. אחת הדילמות המרכזיות באפיון של תכנה שקשורה לרשת היא תמיד סמלים שקשורים לרשת &#8211; שהיא נותרה עד היום רעיון מופשט לא שונה בהרבה מראשיתה &#8211; ומושגים כמו &#8220;רשת&#8221; העלאה&#8221; והורדה וכו נותרו בעולם מושגים משלהם. איך מסמלים את האתר המרוחק? האם כמו גלובוס המסמל את הרשת (כמו בדוגמא של בריאן)? או שאולי תמונת שרת (כמו במקור)? ואולי חלון? או צג מחשב?
</p>

<div id="attachment_417" style="width: 210px" class="wp-caption alignright">
  <img class="wp-image-417 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/server.png" alt="server" width="200" height="200" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/server.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/server-120x120.png 120w" sizes="(max-width: 200px) 100vw, 200px" />
  
  <p class="wp-caption-text">
    העיצוב שלי לשרת &#8211; קהל המשתמשים לא זקוק להסבר.
  </p>
</div>

<p dir="rtl" style="text-align: right;">
  במקרה הזה הסמל אמור לדבר לא רק למשתמש המתקדם אלא גם למתחיל, אולם הנחתי, כי מי שבחר להשתמש בתכנת FTP, נכיר בעקרון של &#8220;שרת&#8221; ושהשרת הוא רעיון מרכזי יותר מאשר &#8220;רשת&#8221; או &#8220;אתר&#8221;.
</p>

<div id="attachment_418" style="width: 210px" class="wp-caption alignleft">
  <img class="wp-image-418 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/sitemanager1.png" alt="sitemanager" width="200" height="200" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/sitemanager1.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/sitemanager1-120x120.png 120w" sizes="(max-width: 200px) 100vw, 200px" />
  
  <p class="wp-caption-text">
    בעיצוב הסופי הצבע מבליט את גלגל השיניים ונותן לאייקון עומק.
  </p>
</div>

<p dir="rtl" style="text-align: right;">
  upload and download<br /> אחד היתרונות הבולטים של התכנה הוא הקוד הפתוח המאפשר גרסאות ל<strong>שפות</strong> רבות. יחד עם זאת, החלוקה המרכזית של התכנה לטור ימין וטור שמאל מחלקת אותו גם לקבצים המקומיים ולקבצי השרת. כך למעשה בגרסאות הראשונות אייקון ההורדה הפנה לצד שמאל כך &#8211; <a href="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download.png"><img class="aligncenter size-full wp-image-348" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/11/download.png" alt="download" width="16" height="16" /></a> הדבר בעייתי בשפות כמו עברית וערבית בהם העץ אינו מוצג בצד זה אלא להפך.  בנוסף, ישנה הבנה כללית רחבה יותרכיום לגבי הורדה והעלאה לשרת/לענן כיום ולכן עיצבתי את סמל ההורדה הלאה כך
</p>

<p dir="rtl" style="text-align: right;">
  אך מבדיקה התברר לי שהתצוגה שהקטנה שלו, לא מתאימה לעיצוב ולכן התאמתי את האייקון למקרה השימוש:
</p>

<div id="attachment_413" style="width: 210px" class="wp-caption alignright">
  <img class="wp-image-413 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/downloadadd1.png" alt="downloadadd" width="200" height="200" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/downloadadd1.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/downloadadd1-120x120.png 120w" sizes="(max-width: 200px) 100vw, 200px" />
  
  <p class="wp-caption-text">
    העיצוב הסופי לפעולה קריא גם בגודל קטן יותר
  </p>
</div>

<div id="attachment_406" style="width: 210px" class="wp-caption aligncenter">
  <img class="wp-image-406 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/downloadadd.png" alt="downloadadd" width="200" height="200" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/downloadadd.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/downloadadd-120x120.png 120w" sizes="(max-width: 200px) 100vw, 200px" />
  
  <p class="wp-caption-text">
    download add to qeue
  </p>
</div>

<p dir="rtl" style="text-align: right;">
  השימוש בצבעים ירוק וכחול בצורה קונסיסטנטית לסמליות של הורדה והעלאה עוזר למשתמש לפענך מכלול של סמלים. ולמנוע כאב מוכר של בלבול בין שני הטורים בתכנה, או בפעולה המתבצעת. דוגמא נוספת היא הוספת הצבעים המשוייכים לסמל הסינכרון, על מנת להבדיל אותו מסל של &#8220;קישור&#8221; ולתת לו רמז לפעולה.<img class="alignleft wp-image-416" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/reconnect.png" alt="reconnect" width="80" height="80" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/reconnect.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/reconnect-120x120.png 120w" sizes="(max-width: 80px) 100vw, 80px" />
</p>

<h2 dir="rtl" style="text-align: right;">
  Use case -small icons<br /> <img class="alignleft wp-image-404" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/ascii.png" alt="ascii" width="80" height="80" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/ascii.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/ascii-120x120.png 120w" sizes="(max-width: 80px) 100vw, 80px" />
</h2>

<p dir="rtl" style="text-align: right;">
  מבדיקה של העיצוב מגלים את מרבית הטעויות הגדולות בעיצוב.
</p>

<p dir="rtl" style="text-align: right;">
  הגרסא הראשונה של האייקונים שעיצבתי לקוד הייתה לא שמישה בתצוגה הקטנה של 16 פיקסלים. זה גודל התצוגה המקסימלי והיעודי שלה.
</p>

<p dir="rtl" style="text-align: right;">
  הגרסא הסופית שעיצבתי &#8211; מכילה אייקון שנראה טוב בהקטנה וגם בעל אסטתיקה פשוטה יותר שמזכירה את המקור (ותהיה מובנת למשתמשים)<br /> <img class="alignright wp-image-411 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/binary1.png" alt="binary" width="200" height="200" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/binary1.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/binary1-120x120.png 120w" sizes="(max-width: 200px) 100vw, 200px" /> <img class="alignright wp-image-410 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/auto.png" alt="auto" width="200" height="200" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/auto.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/auto-120x120.png 120w" sizes="(max-width: 200px) 100vw, 200px" /> <img class="alignright wp-image-409 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/ascii1.png" alt="ascii" width="200" height="200" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/ascii1.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/ascii1-120x120.png 120w" sizes="(max-width: 200px) 100vw, 200px" />
</p>

<h2 dir="rtl" style="text-align: right;">
  bugs
</h2>

<p dir="rtl" style="text-align: right;">
  תמיד יש בדיקה של באגים &#8211; בחלוקה למאפייני שימוש רציתי להבהיר למשתמש את קטגוריות השימוש השונות. רציתי לתת רקע שונה לפי קטגוריות הפעולה השונות (ראה מטה) אבל הרקע האפור פגע בקריאות של האייקונים של תצוגת החלונות וגם לא פעל טוב בבדיקת שימוש פשוטה שלי &#8211; לכן הפרדתי אותם מהרקע שלהם לגמרי. כהערת שוליים,
</p>

<div id="attachment_407" style="width: 210px" class="wp-caption alignright">
  <img class="wp-image-407 size-full" src="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/remotetreeview.png" alt="remotetreeview" width="200" height="200" srcset="http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/remotetreeview.png 200w, http://www.aniboaz.co.il/Blog/wp-content/uploads/2014/12/remotetreeview-120x120.png 120w" sizes="(max-width: 200px) 100vw, 200px" />
  
  <p class="wp-caption-text">
    remote tree view &#8211; פה דווקא השתמשתי באייקון בגלובוס ולא בשרת. למה? כי שרת דומה מאד למחשב.
  </p>
</div>

<p dir="rtl" style="text-align: right;">
  ארבעת כפתורי ההסתרה של החלונות הן הבעיה מספר אחת מבחינתי בUX של התכנה, בגלל שהמיקום שלהם גם מבלבל בינהם וגם לא ברור על מה הם משפיעות. אם הייתי יכול הייתי מזיז אותם לחלונות של כל אחד או מוותר על זה.
</p>

<address>
  עדכון:<br /> התמה תחולק ביחד עם הגרסא הבאה של התכנה.
</address>

[<button>להורדה</button>][1].

<div style="width: 1139px" class="wp-caption aligncenter">
  <img src="http://www.aniboaz.co.il/images/port/ui/flatzillaui/Filzillanew2.png" alt="" width="1129" height="864" />
  
  <p class="wp-caption-text">
    Flatzilla Icon set
  </p>
</div>

 [1]: http://aniboaz.co.il/Flatzilla.rar
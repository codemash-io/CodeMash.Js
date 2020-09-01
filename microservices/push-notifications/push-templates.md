---
description: Overview of push notification templates
---

# Push Templates

Templates allow you to reuse your push notifications. The following tables give details about all of the available template fields as there are quite a few of them.

## Field descriptions

Some of the fields are platform-specific, as such the following fields are divided into any platform and platform-specific fields.

### Any platform fields

<table>
  <thead>
    <tr>
      <th style="text-align:left">Field</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Providers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">ID</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">The ID of a template that is used for API requests.</td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Template</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Name of a template used for display purposes.</td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Code</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Razor syntax code block to process tokens. Attached to other fields:<b> title, body, data, subtitle</b>.</td>
      <td
      style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Title</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">
        <p>Title displayed in a notification above the message body.</p>
        <p>&#x2705; <b>Translatable.</b>
        </p>
      </td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Body</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">
        <p>Message body displayed in the notification.</p>
        <p>&#x2705; <b>Translatable</b>.</p>
      </td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Priority</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Message delivery priority. The default priority translates to &quot;High&quot;
        on IOS and &quot;Normal&quot; on Android.</td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Ttl</td>
      <td style="text-align:left">integer</td>
      <td style="text-align:left">Time to live in seconds. The notification will be expired if the device
        does not come back online within this time.</td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Data</td>
      <td style="text-align:left">object</td>
      <td style="text-align:left">JSON object of &lt;string, string&gt; pairs delivered with notification.</td>
      <td
      style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Meta</td>
      <td style="text-align:left">object</td>
      <td style="text-align:left">This is <b>not delivered</b> with push notification. Key-value pairs that
        can be received when getting already pushed notifications.</td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Url</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Url to open when the user clicks on the notification. Example: <code>https://codemash.io</code>.</td>
      <td
      style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Image</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">URL to an image to display in the notification.</td>
      <td style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Collapse ID</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Only one notification with the same id will be shown on the device in
        case the user gets more than one notification of the same collapse ID.</td>
      <td
      style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Buttons</td>
      <td style="text-align:left">object</td>
      <td style="text-align:left">
        <p>Buttons to show below notification. Icons only work on Android.</p>
        <p>&#x2705; <b>Translatable.</b>
        </p>
      </td>
      <td style="text-align:center">OneSignal</td>
    </tr>
  </tbody>
</table>

### Android fields

<table>
  <thead>
    <tr>
      <th style="text-align:left">Field</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Providers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Group ID</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Notifications with the same group id will be stacked together (different
        from collapse as collapse shows the last notification and group shows them
        grouped).</td>
      <td style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Group message</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">
        <p>A message displayed if at least 2 notifications are grouped together.
          Default is &quot;$[notif_count] new messages&quot;. Parameter $[notif_count]
          will be replaced with total grouped notifications. Example: &quot;You have
          $[notif_count] new messages&quot;.</p>
        <p>&#x2705; <b>Translatable.</b>
        </p>
      </td>
      <td style="text-align:center">OneSignal</td>
    </tr>
    <tr>
      <td style="text-align:left">Channel ID</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">The Android Oreo Notification Category to send the notification under.</td>
      <td
      style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Restricted package name</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">The package name of the application where the registration token must
        match in order to receive the message.</td>
      <td style="text-align:center">Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Sound</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">A filename of sound played when a notification arrives. Specify &quot;default&quot;
        to play default sound.</td>
      <td style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Visibility</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">
        <p>Visibility of the notification.</p>
        <ol>
          <li>Private (Default) - hides message content on the clock screen if the user
            has set to hide sensitive notification content in system settings.</li>
          <li>Public - Shows full notification on the lock screen.</li>
          <li>Secret - Doesn&apos;t reveal any message content on the lock screen.</li>
        </ol>
      </td>
      <td style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Default vibration settings</td>
      <td style="text-align:left">bool</td>
      <td style="text-align:left">If true, uses default Android&apos;s vibrate pattern.</td>
      <td style="text-align:center">Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Vibration timings</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">String separated by comma (,) of vibration times in seconds. First value
        - time to wait, second - time to vibrate (keep repeating these values for
        on/off effects). Example: &quot;2s,1.5s,2s,1s&quot; (wait for 2s, vibrate
        for 1.5s, then wait for 2s and finally vibrate for 1s).</td>
      <td style="text-align:center">Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Default light settings</td>
      <td style="text-align:left">bool</td>
      <td style="text-align:left">If true, uses default LED light settings from configuration.</td>
      <td style="text-align:center">Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Led color</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Device LED notification light. ARGB Hex format. Example(Blue): <code>&quot;FF0000FF&quot;</code>.</td>
      <td
      style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Light on duration</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Along with &quot;Light off duration&quot;, define the blink rate of LED
        flashes. Duration in seconds with up to nine fractional digits, terminated
        by &apos;s&apos;. Example: &quot;3.5s&quot;.</td>
      <td style="text-align:center">Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Light off duration</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Along with &quot;Light on duration&quot;, define the blink rate of LED
        flashes. Duration in seconds with up to nine fractional digits, terminated
        by &apos;s&apos;. Example: &quot;3.5s&quot;.</td>
      <td style="text-align:center">Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Accent color</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">The background color of the notification circle to the left of the notification
        text. Example(Blue): <code>&quot;FF0000FF&quot;</code>.</td>
      <td style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Small icon</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">The notification&apos;s icon. If not set, sets the default app icon from
        app settings.</td>
      <td style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Large icon</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Shows instead of a small icon. Can be a drawable resource name or a URL.</td>
      <td
      style="text-align:center">OneSignal</td>
    </tr>
    <tr>
      <td style="text-align:left">Background Layer</td>
      <td style="text-align:left">object</td>
      <td style="text-align:left">Background image for notification.</td>
      <td style="text-align:center">OneSignal</td>
    </tr>
    <tr>
      <td style="text-align:left">Sticky</td>
      <td style="text-align:left">bool</td>
      <td style="text-align:left">If true, notification persists even when the user clicks it.</td>
      <td style="text-align:center">Firebase</td>
    </tr>
  </tbody>
</table>

### iOS fields

<table>
  <thead>
    <tr>
      <th style="text-align:left">Field</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Providers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Push type</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Must reflect the content of the notification. Valid values are &quot;alert&quot;,
        &quot;background&quot;, &quot;voip&quot;. The default is &quot;alert&quot;.</td>
      <td
      style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">App&apos;s bundle ID</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">The topic for the notification. In general, the topic is your app&#x2019;s
        bundle ID, but it may have a suffix based on the push notification type
        (only voip type requires a suffix).</td>
      <td style="text-align:center">Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Group ID</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Notifications with the same group id will be stacked together (different
        from collapse as collapse shows the last notification and group shows them
        grouped).</td>
      <td style="text-align:center">OneSignal, Firebase</td>
    </tr>
    <tr>
      <td style="text-align:left">Subtitle</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">
        <p>Message subtitle displayed below the title.</p>
        <p>&#x2705; <b>Translatable.</b>
        </p>
      </td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Content available</td>
      <td style="text-align:left">bool</td>
      <td style="text-align:left">If true, wakes an app from the background to run custom native code.</td>
      <td
      style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Category</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Category APS payload. Example: <code>calendar</code> the category which
        contains actions like <code>accept</code> and <code>decline</code> .</td>
      <td
      style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Bade count</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">Amount to set for notification count. If not specified, displays an incremented
        amount. (Should be omitted as CodeMash implementation does not support
        this correctly).</td>
      <td style="text-align:center">All</td>
    </tr>
    <tr>
      <td style="text-align:left">Sound</td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">A filename of sound played when a notification arrives. Specify &quot;default&quot;
        to play default sound.</td>
      <td style="text-align:center">All</td>
    </tr>
  </tbody>
</table>

## External references

As CodeMash is using other notification providers internally, the following resources give more details about each of the field.

* [Firebase Cloud Messaging notification fields](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#Message)
* APNS notification fields
* [One Signal notification fields](https://documentation.onesignal.com/reference#create-notification)
* [Expo notification fields](https://docs.expo.io/guides/push-notifications)


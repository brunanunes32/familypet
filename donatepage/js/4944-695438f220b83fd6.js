"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4944],{99472:function(e,n,t){t.d(n,{JO:function(){return o.J},Vr:function(){return r.V},wp:function(){return a.w}});var r=t(81954),o=t(33413),a=t(9433)},21672:function(e,n,t){t.d(n,{J:function(){return r.J}});var r=t(33413)},15233:function(e,n,t){t.d(n,{J:function(){return r.J},r:function(){return o.r}});var r=t(33413),o=t(50958)},47892:function(e,n,t){t.d(n,{J:function(){return r.J},k:function(){return o.k}});var r=t(33413),o=t(96072)},1509:function(e,n,t){t.d(n,{h:function(){return r.h}});var r=t(74416)},48175:function(e,n,t){t.d(n,{T:function(){return r.T}});var r=t(41874)},74016:function(e,n,t){t.d(n,{C:function(){return r.C}});var r=t(38168)},17970:function(e,n,t){t.d(n,{V:function(){return a}});var r=t(50959),o=t(56006);function a(){let[e,n]=(0,r.useState)();return(0,r.useEffect)(()=>{(0,o.s)()||(0,o.Dt)()?n(!0):n(!1)},[]),{isMobileUserAgent:e}}},49628:function(e,n,t){t.d(n,{h:function(){return d}});var r=t(11527);t(50959);var o=t(82187),a=t.n(o),i=t(19768),u=t(74737),s=t(12963),l=t(61327);function d(e){let{children:n,className:t,cta:o,onClose:d,onReset:c=()=>window.location.reload()}=e;return(0,r.jsx)(u.W,{className:a()(t,"hrt-mb-2"),children:(0,r.jsx)(i.b,{overlayContent:!1,isOpen:!0,onClose:d,variant:"negative",closeButtonLabel:(0,l.t)("Close alert"),title:(0,r.jsxs)("p",{className:"hrt-mb-0",children:[n||(0,l.t)("We’re sorry. Something went wrong."),(0,r.jsx)(r.Fragment,{children:" "}),o||(0,r.jsx)(s.A,{onClick:c,children:(0,l.t)("Please try again.")})]})})})}},68576:function(e,n,t){t.d(n,{S:function(){return u}});var r=t(11527);t(50959);var o=t(60481),a=t(49628);let i=e=>{let{resetErrorBoundary:n}=e;return(0,r.jsx)(a.h,{onReset:n})};var u=function(e){let{children:n,type:t="alert",onReset:a=()=>window.location.reload(),onError:u=e=>{window?.newrelic?.noticeError?.(e)}}=e;return(0,r.jsx)(o.ErrorBoundary,{FallbackComponent:{alert:i,suppress:()=>null}[t],onError:u,onReset:a,children:n})}},49276:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(11527);function o(e){let{color:n="#6D2E91"}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"17",fill:"none",children:(0,r.jsx)("path",{d:"M7.142 3.597c-.289-.094-.58-.18-.87-.274-.83-.265-1.359-.804-1.588-1.613-.124-.442-.246-.885-.371-1.327C4.233.105 4.086 0 3.786 0c-.314 0-.455.1-.537.39-.134.467-.258.937-.4 1.402-.224.745-.728 1.245-1.486 1.507-.308.106-.622.197-.934.295-.281.089-.427.26-.429.505-.002.253.143.426.434.518.296.093.591.185.886.28.818.266 1.33.807 1.558 1.6.125.437.245.875.369 1.312.081.287.267.436.538.435.268-.001.45-.152.533-.442.13-.457.253-.916.39-1.372.23-.763.744-1.271 1.526-1.529.3-.099.601-.19.901-.286.285-.092.426-.262.427-.506.002-.247-.139-.422-.42-.512ZM15.254 10.258c-.002-.249-.141-.412-.445-.51-.568-.183-1.15-.334-1.704-.554-1.235-.49-1.997-1.388-2.334-2.625-.184-.676-.378-1.349-.568-2.023-.081-.286-.269-.44-.535-.44s-.454.153-.536.44c-.208.735-.403 1.474-.627 2.204-.39 1.27-1.254 2.114-2.554 2.548-.477.16-.96.303-1.44.454-.282.09-.428.262-.43.506-.002.253.143.425.435.517.449.14.898.28 1.347.422 1.416.45 2.314 1.37 2.699 2.752.182.653.37 1.306.543 1.961.064.24.186.418.429.51h.267c.253-.093.367-.282.433-.525.194-.722.381-1.447.609-2.16.4-1.257 1.27-2.092 2.568-2.514.463-.15.928-.293 1.391-.442.315-.1.453-.263.452-.52Z",fill:n})})}},21102:function(e,n,t){var r,o;t.d(n,{m:function(){return r}}),(o=r||(r={})).CopyLink="CopyLink",o.Email="Email",o.Facebook="Facebook",o.General="General",o.Instagram="Instagram",o.InstagramStory="InstagramStory",o.Messenger="Messenger",o.More="More",o.Nextdoor="Nextdoor",o.QrCode="QrCode",o.Sms="Sms",o.Twitter="Twitter",o.WhatsApp="WhatsApp"},34314:function(e,n,t){t.d(n,{D:function(){return a}});var r=t(61327),o=t(18203);let a={email:{donor:e=>{let{fundName:n,fundOrganizerFullName:t,url:o}=e;return{subject:(0,r.t)("Have you seen {{- fundTitle}}?",{fundTitle:n}),body:(0,r.t)(`Hello 
 
 I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? 
 
 Even a small donation could help {{- name}} reach their fundraising goal. And if you can't make a donation, it would be great if you could share the fundraiser to help spread the word. 
 
 Thanks for taking a look!`,{name:t,shareLink:o})}},organizer:e=>{let{fundName:n,url:t}=e;return{subject:(0,r.t)("Will you support my GoFundMe?"),body:(0,r.t)("Hi there,\n\nIt would mean so much if you could take a look at my GoFundMe, “{{- fundName}}”. Please donate or share with others—any help gets me closer to my goal. Thanks in advance for your kindness and support.\n\nHere’s the link: {{- shareLink}}",{fundName:n,shareLink:t})}},supporter:e=>{let{fundName:n,fundOrganizerFullName:t,url:o}=e;return{subject:(0,r.t)('Have you seen "{{- title}}"?',{title:n}),body:(0,r.t)(`Hello 
 
 I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. 
 
 Even a small donation could help {{- name}} reach their fundraising goal. And if you can't make a donation, it would be great if you could share the fundraiser to help spread the word. 
 
 Thanks for taking a look!`,{name:t,shareLink:o})}}},sms:{donor:e=>{let{url:n}=e;return(0,r.t)("Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}",{shareLink:n})},organizer:e=>{let{url:n}=e;return(0,r.t)("Hey, do you have a minute to look at my GoFundMe? It would mean so much if you could donate or share with others—any help gets me closer to my goal.\n\n{{- shareLink}}",{shareLink:n})},supporter:e=>{let{url:n}=e;return(0,r.t)("Hi, I'd really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}",{shareLink:n})}},twitter:{donor:e=>{let{fundName:n}=e;return n??""},organizer:()=>(0,r.t)("I could use your help reaching my fundraising goal. Every single share and donation makes a difference."),supporter:e=>{let{fundName:n}=e;return n??""}},whatsapp:{donor:e=>{let{fundName:n,url:t}=e;return(0,r.t)("Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}",{fundTitle:n,shareLink:t})},organizer:e=>{let{url:n}=e;return(0,r.t)("I could use your help reaching my fundraising goal. Every single share and donation makes a difference. {{- shareLink}}",{shareLink:n})},supporter:e=>{let{fundDescription:n,fundName:t,url:a}=e;return(0,r.t)(`Hi,

I'd really appreciate it if you would share or donate to this GoFundMe.

*{{- fundTitle}}*

{{- description}}

Read more here {{- fundUrl}}

Forward this message to your contacts to help this campaign reach its goal!`,{description:function(e){let n=(0,o.Ch)(e.replace(/<br[^>]*>/gi,"\n").replace(/&amp;/g,"&"));return n.length>150?n.substring(0,149)+"…":n}(n),fundTitle:t,fundUrl:a})}}}},98009:function(e,n,t){t.d(n,{AC:function(){return s},I1:function(){return l},QK:function(){return d},aQ:function(){return i},ee:function(){return c},j4:function(){return h}});var r=t(21102),o=t(15381);let a={o:"organizer",d:"donor",s:"supporter"},i={[o.UsV.ORGANIZER]:"o",[o.UsV.DONOR]:"d",[o.UsV.SUPPORTER]:"s"};o.UsV.ORGANIZER,o.UsV.DONOR,o.UsV.SUPPORTER,r.m.CopyLink,r.m.Email,r.m.Facebook,r.m.Instagram,r.m.InstagramStory,r.m.Messenger,r.m.More,r.m.Nextdoor,r.m.QrCode,r.m.Sms,r.m.Twitter,r.m.WhatsApp;let u={cl:r.m.CopyLink,e:r.m.Email,fb:r.m.Facebook,fm:r.m.Messenger,m:r.m.More,ig:r.m.Instagram,igs:r.m.InstagramStory,nd:r.m.Nextdoor,sms:r.m.Sms,wa:r.m.WhatsApp,qr:r.m.QrCode,x:r.m.Twitter},s={[r.m.CopyLink]:"cl",[r.m.Email]:"e",[r.m.Facebook]:"fb",[r.m.Messenger]:"fm",[r.m.More]:"m",[r.m.Instagram]:"ig",[r.m.InstagramStory]:"igs",[r.m.Nextdoor]:"nd",[r.m.Sms]:"sms",[r.m.WhatsApp]:"wa",[r.m.QrCode]:"qr",[r.m.Twitter]:"x"};function l(e){return e in a}function d(e){return e in u}function c(e){return e in i}function h(e){return e in s}},62969:function(e,n,t){t.d(n,{x:function(){return s}});var r=t(50959),o=t(14677),a=t(8352),i=t(34365);let u=(e,n)=>{window.hj?.("identify",e,n)};function s(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],{countryCode:n,countryCodeFromIP:t,locale:s}=(0,o.bN)(),{data:l,isLoggedIn:d,isLoading:c}=(0,a.jY)(),h=t||n,f=(0,i.hc)(s),m=l?.person_id||null,[p,g]=(0,r.useState)(e?{}:void 0);return(0,r.useEffect)(()=>{!c&&p&&(u(m,{country:h,isLoggedIn:d,locale:f,...p}),g(void 0))},[h,p,c,d,m,f]),e=>g(e)}},63671:function(e,n,t){t.d(n,{TC:function(){return d},WT:function(){return i},iD:function(){return u},ng:function(){return l}});var r=t(40698),o=t(39218),a=t(90798);let i=(e,n)=>`${e}?${n?(0,a.vb)(n):""}`,u=(e,n,t)=>e.reduce((e,r)=>{if(!e[r]){let o=n(r);e[r]=i(t,o)}return e},{}),s=()=>`${r.config.environment.urlShortenerDomain}/shortenUrl`,l=e=>{let n=s();return o.eN.post(n,{long_url:e})},d=async e=>{let n=new URL(s()),t={};return await Promise.all(Object.keys(e).map(async r=>{let o=e[r];if(!o.includes(n.hostname)){let e=await l(o);return t[r]=e.data.shortUrl,e}return t[r]=o,Promise.resolve()})).catch(()=>{Object.keys(e).forEach(n=>t[n]=e[n])}),t}},1733:function(e,n,t){t.d(n,{I:function(){return u}});var r,o=t(50959),a=t(14291),i=t(56006);function u(e){let[n]=(0,a.SS)("instagram_sharing"),[t,u]=o.useState(!1),[s,l]=o.useState(!1),d=(0,i.s2)(),[c]=(0,a.SS)(r.NEXT_DOOR_SHARE_SHEET_OPTION,{},{overrideAttributes:{...e?{fundCountryCode:e.toUpperCase()}:{}}});return o.useEffect(()=>{if(!d){l(!1);return}if(!n||!d){u(!1);return}let e=new Blob(["test"],{type:"application/json"}),t=[new File([e],"share.png",{type:e.type})],r=navigator.canShare&&navigator.canShare({files:t});u(r),l(r)},[n,d]),{canShareToNextdoor:c,canShareToInstagram:t,canShareToNative:s}}(r||(r={})).NEXT_DOOR_SHARE_SHEET_OPTION="nextdoor_share_sheet_option"}}]);
//# sourceMappingURL=4944-695438f220b83fd6.js.map
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7794],{48941:function(e,n,t){var r,a,o,i,u,s,d,l,c,f;t.d(n,{Sm:function(){return a},l5:function(){return i},ti:function(){return r},uU:function(){return u}}),(s=r||(r={})).YOUR_DONATION="your_donation",s.MOST_RECENT_DONOR="most_recent_donor",s.TOP_DONOR="top_donor",s.FIRST_DONOR="first_donor",(d=a||(a={})).RECENT_DONATIONS="recent_donations",d.RECENT_VIEWS="recent_views",(l=o||(o={})).PENDING="pending",l.SUCCESS="success",l.ERROR="error",l.DEFAULT="default",(c=i||(i={})).READY="ready",c.PROCESSING="processing",c.ERRORED="errored",c.REVIEW="review",c.DELETED="deleted",c.SUSPENDED="suspended",(f=u||(u={})).CO="co",f.TEAM_MEMBER="team_member",f.STATSUSER="statsuser",f.CHARITY="charity"},8389:function(e,n,t){t.d(n,{I:function(){return i}});var r=t(61327),a=t(43691),o=t(75867);let i=(e,n,t)=>e.map(e=>{let i=e.is_anonymous?(0,r.t)("Anonymous"):e.name;return{amountFormatted:n.formatAsCurrency(e.amount),donor:{fullName:i,initials:e.is_anonymous?"":(0,o.Q)(i),profileImage:e.profile_url.includes("gfm_donor.gif")?void 0:e.profile_url},offlineDonation:e.is_offline,profileUrl:e.profile_url,timeAgo:(0,a.BK)({locale:t})(new Date(e.created_at))}})},17794:function(e,n,t){t.d(n,{g:function(){return g}});var r=t(18063),a=t(48637),o=t(45957);function i(e){return e?.facebook_name?e.facebook_name:e?.first_name?`${e.first_name} ${e.last_name}`.trim():""}var u=t(48941),s=t(61327),d=t(54561),l=t(91886),c=t(86551),f=t(75867),m=t(15381),_=t(3144),p=t(8433);function g(){var e,n;let{query:{campaignUrl:t}}=(0,r.useRouter)(),g=(0,p.g)(),{data:y,loading:b,error:h}=(0,m.GRk)({variables:{slug:`${t}`},skip:!g}),E=(e=y?.fundraiser,{auto_fb_post_mode:!!e?.autoFbPostMode,beneficiary:(0,o.Sg)(e?.beneficiary),business:(0,o.LP)(e),category_id:Number(e?.categoryId),campaign_id:e?.fundId?Number(e?.fundId):0,campaign_image_url:e?.fundraiserImageUrl??"",campaign_photo:(0,o.ds)(e?.fundraiserPhoto),charity:(0,o.vG)(e?.charity),charity_organized:!!e?.charityOrganized,charity_id:0,comments_enabled:!!e?.commentsEnabled,created_at:(0,o.i$)(e?.createdAt),current_amount:e?.currentAmount.amount??0,currencycode:e?.currentAmount.currencyCode??"",deactivated:!!e?.deactivated,default_url:e?.defaultUrl??"",donation_count:e?.donationCount??0,donations_enabled:!!e?.donationsEnabled,enable_contact:!!e?.enableContact,enable_smart_goals:!!e?.smartGoalsEnabled,first_donor:e?.firstDonor,fund_description_excerpt:e?.fundDescriptionExcerpt??"",fund_description:e?.fundDescription??"",fund_name:e?.fundName??"",goal_amount:e?.goalAmount.amount??0,goal_deadline:(0,o.i$)(e?.goalDeadline),goal_log:e?.goalLog||[],has_beneficiary:!!e?.beneficiary,has_donations:!!e?.donations,has_gfm_org_donation:!!e?.hasGfmOrgDonation,id:e?.fundId?Number(e?.fundId):0,in_degraded_mode:!!e?.inDegradedMode,is_business:!!e?.business,is_charity:!!e?.charity,is_gfm_dot_org_fund:!!e?.isGfmDotOrgFund,is_launched:!!e?.isLaunched,is_partner:!!e?.partner,is_personal_charity:!!e?.isPersonalCharity,is_team:!!e?.team&&"ACTIVE"===e.team.status,launch_date:(0,o.i$)(e?.launchDate),location:{city:e?.location?.city??"",country:e?.location?.countryCode??"",postal_code:e?.location?.postalCode??"",state_prefix:e?.location?.statePrefix??""},media_id:e?.mediaId??"",media_type:(0,o.uR)(e?.mediaType),most_recent_donor:e?.mostRecentDonor,partner:(0,o.sz)(e),partner_external_organizer:e?.partnerExternalOrganizer&&{first_name:e?.partnerExternalOrganizer.firstName,last_name:e?.partnerExternalOrganizer.lastName},payment_methods:e?.donationConfiguration.paymentMethods,project_type:(0,o.Td)(e?.projectType),state:e?.state?.toLowerCase()??"",status:(0,o.OA)(e?.status),tags:e?.tags,team:(0,o.CD)(e?.team),template_id:e?.templateId??"",top_donor:e?.topDonor,turn_off_donations:e?.turnOffDonations?1:0,url:e?.fundUrl??"",user_defined_goal_amount:e?.userDefinedGoalAmount?.amount??e?.goalAmount.amount??0,user_facebook_id:"",user_first_name:e?.organizer.firstName??"",user_id:Number(e?.organizer.id),user_last_name:e?.organizer.lastName??"",user_profile_url:e?.organizer.profileUrl??"",visible_in_search:!!e?.visibleInSearch}),N=(0,a.sE)(),I=g?E:N.campaign,D=(0,o.nE)(y),C=g?D:N.donations,v=g?(0,o.cr)(y?.fundraiser):N?.checkoutForm?.paymentProcessor?.processor,A=function(e){let{charity:n,deactivated:t,status:r,donations_enabled:a}=e;return(n?.paypal_activation_status===c.x.DELETED||n?.paypal_activation_status===c.x.INACTIVE)&&n?.id!==130054?l.c4.CLOSED:t?l.c4.DEACTIVATED:1!==r||a?1===r?l.c4.ACTIVE:5===r?l.c4.IN_REVIEW:l.c4.DELETED:l.c4.CLOSED}({charity:I?.charity,status:I?.status,deactivated:I?.deactivated,donations_enabled:I?.donations_enabled}),S=g?(0,o.H_)(y?.fundraiser?.teamMembers):N.team_members,T=I?.is_team&&I?.team.status!==0,O=(0,o.z7)(y?.fundraiser),R=g?O:N.top_supporters,k=y?.fundraiser?.suggestedDonationStats.medianDonationAmount.amount||0,x=(0,o.Vr)(y),U=g?x:N.assets,w=y?.fundraiser?.shareAssets||[];return{...I,amountRaised:function(e){let{donations:n,currentAmount:t=0}=e;return n?.forEach(e=>{e.fromLocalStorage&&(t+=e.amount)}),t}({donations:C,currentAmount:I?.current_amount}),asset:U?.find(e=>e.status===u.l5.READY&&!!e.playbacks[0]?.playback_id)||(U&&U.length?U[U.length-1]:null),beneficiaryFullName:i(I?.beneficiary),category:(0,_.n)(I?.category_id,I?.url||I?.default_url),donations:C,error:h,fundDescription:(n=I?.fund_description,n?.replace(/\[email redacted\]/g,s.t("[email redacted]")).replace(/\[phone redacted\]/g,s.t("[phone redacted]")).replace(/alt=(?:'|")[^'"]*(?:'|")/g,'alt=""')),fundraiserCountry:I?.location.country.toUpperCase(),fundraiserStatus:A,isTeamWithTeamMembers:function(e){let{isTeamEnabled:n,teamMembers:t}=e,r=t.filter(e=>e.role===l.vX.TEAM_MEMBER);return n&&r.length>0}({isTeamEnabled:T,teamMembers:S}),isTeamEnabled:T,isTrending:function(e){let{donations:n,fundraiserStatus:t}=e;return t===l.c4.ACTIVE&&n.filter(e=>72>=(0,d.Z)(new Date,new Date(e.created_at))).length>=10}({donations:C,fundraiserStatus:A}),loading:b,median:k||N?.suggested_donation_stats?.median_donation_amount,organizerFullName:I.charity&&I.partner_external_organizer?`${I.partner_external_organizer.first_name} ${I.partner_external_organizer.last_name}`.trim():I.charity_organized&&I.charity?I.charity.name:`${I.user_first_name} ${I.user_last_name}`.trim(),paymentProcessor:v,shareAssets:w,teamListBene:function(e){let{beneficiary:n,hasBeneficiary:t}=e,r=i(n);if(t)return{person:{as:l.Mf.person,fullName:r,initials:(0,f.Q)(r),profileImage:t?n.profile_url:"",role:l.vX.BENEFICIARY}}}({beneficiary:I?.beneficiary,hasBeneficiary:I?.has_beneficiary}),team_members:S,topSupporters:R}}},8433:function(e,n,t){t.d(n,{g:function(){return i}});var r=t(48637),a=t(71139),o=t(70605);function i(){let{isGqlFundraiserDataEnabled:e}=(0,r.sE)(),n="";return n=(0,o.$)(),(0,a.o)(!0,"fe-ssr-campaign-gql-over-native-gateway",e?"enabled":"",n),e}},45957:function(e,n,t){t.d(n,{CD:function(){return m},H_:function(){return p},LP:function(){return y},OA:function(){return d},Sg:function(){return c},Td:function(){return s},Vr:function(){return D},cr:function(){return b},ds:function(){return _},i$:function(){return f},nE:function(){return h},qm:function(){return C},sz:function(){return g},uB:function(){return I},uR:function(){return u},vG:function(){return l},z7:function(){return E}});var r=t(8389),a=t(91886),o=t(56753),i=t(86551);function u(e){return e?a.tR[e]:a.tR.UNKNOWN}function s(e){return e?a.d1[e]:a.d1.UNKNOWN}function d(e){return e?a.kM[e]:a.kM.DELETED}function l(e){return e?{city:e?.city??"",country:e?.country,ein:Number(e?.ein),id:Number(e?.id),logo:function(e){if(e?.logo)return{url:e?.logo?.url,scaled:{"3x2-120":e?.logo?.scaled?.threeByTwo120??"","1x1-120":e?.logo?.scaled?.oneByOne120??""}}}(e),logo_url:"",name:e?.name??"",npo_id:e?.npoId??null,paypal_activation_status:e?.paypalActivationStatus?e?.paypalActivationStatus:i.x.INACTIVE,paypal_enrollment_status:e?.paypalEnrollmentStatus?e?.paypalEnrollmentStatus:i.h.UNENROLLED,slug:e?.slug,status:e?.status,state:e?.state??""}:null}function c(e){return{id:e?.id?Number(e?.id):null,user_id:e?.userId?Number(e?.userId):null,person_id:e?.personId?Number(e?.personId):null,first_name:e?.firstName??null,last_name:e?.lastName??null,facebook_name:e?.facebookName??null,is_placeholder_bene:!!e?.isPlaceholderBene,profile_url:e?.profileUrl??""}}function f(e){return e?new Date(e).toISOString():""}function m(e){return{name:e?.name??"",name_encoded:e?.name??"",media_type:e?.mediaType?u(e?.mediaType):null,team_pic_url:e?.teamPicUrl??null,public_attributions:!!e?.publicAttributions,team_invite_limit:e?.teamInviteLimit,status:d(e?.status),created_at:f(e?.createdAt),updated_at:f(e?.updatedAt)}}function _(e){return{url:e?.url??"",scaled:{"1x1-960":e?.scaled?.oneByOne960??"","3x2-1200":e?.scaled?.threeByTwo1200??"","3x2-640":e?.scaled?.threeByTwo640??"","3x2-720":e?.scaled?.threeByTwo720??"","4x3-1200":e?.scaled?.fourByThree1200??"","16x9-720":e?.scaled?.sixteenByNine270??""}}}function p(e){return e?e.map(e=>({amount_raised:e.amountRaised||0,first_name:e.firstName||"",created_at:"",number_of_donations_attributed:e.numberOfDonationsAttributed||0,gfm_profile_url:e.gfmProfileUrl||"",id:e.id?parseInt(e.id,10):0,person_id:e.personId?parseInt(e.personId,10):0,last_name:e.lastName||"",profile_url:e.profileUrl||"",role:a.vX[e.role],status:a.u2[e.status]})):[]}function g(e){return e?.partner?{id:Number(e?.partner?.id)||0,allow_cobranding:e?.partner?.allowCobranding,code:e?.partner?.code,name:e?.partner?.name,logo_url:e?.partner?.logoUrl}:{}}function y(e){return e?.business?{autogen:e.business.autogen,is_claimed:e.business.isClaimed,url:e.business.url}:{}}function b(e){let n=e?.donationConfiguration?.paymentProcessor;return n!==a._I&&n?a.UG.includes(n)?a.MX:n?.toLowerCase():""}function h(e){let n=e?.fundraiser?.donations;return n?.edges?.length?n?.edges?.map(n=>({amount:n?.node?.amount.amount??0,checkout_id:Number(n?.node?.checkoutId)??0,created_at:n?.node?.createdAt,currencycode:n?.node?.amount.currencyCode,donation_id:Number(n?.node?.id)??0,fund_id:Number(e?.fundraiser?.fundId)??0,is_anonymous:!!n?.node?.isAnonymous,is_offline:!!n?.node?.isOffline,name:n?.node?.name??"",profile_url:n?.node?.profileUrl??"",verified:n?.node?.isVerified})):[]}function E(e){return{most_recent_donor:N(e?.mostRecentDonor?.edges,e?.fundId),top_donor:N(e?.topDonor?.edges,e?.fundId),first_donor:N(e?.firstDonor?.edges,e?.fundId)}}function N(e,n){let t=(0,o.t)(e);if(!e||!t||!t.length)return null;let r=t[0];return{amount:r.amount.amount,created_at:f(r.createdAt),currencycode:r.amount.currencyCode,donation_id:r.id?Number(r.id):0,fund_id:n?Number(n):0,is_anonymous:r.isAnonymous,is_offline:r.isOffline,name:r.name,profile_url:r.profileUrl?r.profileUrl:"",verified:r.isVerified}}function I(e,n,t){let{most_recent_donor:a,top_donor:o,first_donor:i}=e||{};if(!a||!o||!i)return;let[u,s,d]=(0,r.I)([a,o,i],t,n);return{mostRecentDonor:u,topDonor:s,firstDonor:d}}function D(e){return e?.fundraiser?.assets?e.fundraiser.assets.map(n=>{var t,r;return{asset_key:n.assetKey,fund_id:e?.fundraiser?.fundId?Number(e?.fundraiser?.fundId):0,type:n.type.toLowerCase(),status:n.status.toLowerCase(),title:n.title,playbacks:(t=n.playbacks)?t.map(e=>({playback_id:e.playbackId})):[],tracks:(r=n.tracks)?r.map(e=>({type:e.type.toLowerCase(),language_code:e.languageCode,text_type:e.textType.toLowerCase(),track_id:e.trackId})):[]}}):[]}function C(e,n,t,r){return e?`${e.firstName} ${e.lastName}`.trim():n&&r?r:`${t?.firstName} ${t?.lastName}`.trim()}},56753:function(e,n,t){t.d(n,{t:function(){return o},x:function(){return i}});var r=t(50959),a=t(15381);let o=e=>(e?.map(e=>e?.node)||[]).filter(e=>!!e);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{skip:!1},[n,t]=(0,r.useState)(!1),{data:i,error:u,fetchMore:s,loading:d,previousData:l}=(0,a.nZS)({notifyOnNetworkStatusChange:!0,skip:e.skip,variables:{fundraiserSlug:e.fundraiserSlug,last:e.pageSize,order:e.order},ssr:!1});if(!i?.viewer?.donationsFromShares?.edges?.length)return{data:[],error:u,loading:d,previousData:l};let{edges:c,pageInfo:f}=i.viewer.donationsFromShares;return{data:o(c),error:u,fetchMoreDonations:async()=>{t(!1);try{await s({variables:{fundraiserSlug:e.fundraiserSlug,before:f.endCursor,last:e.pageSize}})}catch(e){t(!0)}},hasFetchMoreError:n,hasFetchedAllDonations:!f.hasPreviousPage,loading:d,previousData:l}}},3144:function(e,n,t){t.d(n,{n:function(){return o}});var r=t(3694),a=t(61327);let o=(e,n)=>{let t=(0,r.RK)();if(void 0===e)return console.error(`Unexpected undefined value. Variable: id, campaign url: ${n}`),t["15"];let o=t[e.toString()]?t[e.toString()]:t[15];return{...o,name:(0,a.t)(o.name)}}},75867:function(e,n,t){function r(e){let{first_name:n,last_name:t}=e;return[n,t].filter(e=>e).map(e=>e?.trim()).join(" ")}function a(e){let n=e.toUpperCase().replace(/[^A-Z\s]/g,"").split(" ").map(e=>e.charAt(0));return 1===n.length?n[0]:n[0]+n[n.length-1]}t.d(n,{P:function(){return r},Q:function(){return a}})}}]);
//# sourceMappingURL=7794-e617ef590bf4416b.js.map
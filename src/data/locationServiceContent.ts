/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  aldershot: {
    neighborhoods: ["North Town", "Wellington", "Manor Park", "Aldershot Park", "Tice's Meadow", "North Camp", "Redan Hill", "Boxalls Lane"],
    landmarks: ["the Princes Hall", "Aldershot Military Museum", "Aldershot Town FC", "the Wellington Centre", "Manor Park"],
    drainageInfo: "Aldershot's drainage infrastructure reflects its unique military town heritage, with Victorian-era systems serving the garrison area and surrounding residential streets. The town sits on mixed geology of London Clay and Bagshot Sand, creating variable ground conditions that affect pipe stability. Properties near the Basingstoke Canal and Tice's Meadow nature reserve face higher water table levels, while the older terraced streets around North Town have ageing clay pipe networks that require specialist attention.",
    responseTime: "typically within 45 minutes",
    propertyTypes: "Victorian terraces, Edwardian semis, military housing, modern apartments, and commercial premises"
  },
  farnham: {
    neighborhoods: ["Castle Street", "The Borough", "Wrecclesham", "Badshot Lea", "Hale", "Upper Hale", "Rowledge", "Boundstone"],
    landmarks: ["Farnham Castle", "the Museum of Farnham", "Farnham Maltings", "the River Wey", "Birdworld"],
    drainageInfo: "Farnham is one of Surrey's most historic market towns, with drainage systems spanning centuries of construction. Castle Street and The Borough feature Georgian and medieval properties with some of the oldest domestic drainage in the region. The River Wey running through the town centre adds flood risk considerations, while the surrounding villages of Wrecclesham and Rowledge have their own mix of period cottages and modern housing with varying drainage conditions.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Georgian townhouses, period cottages, Victorian villas, modern family homes, and converted properties"
  },
  farnborough: {
    neighborhoods: ["Farnborough Park", "South Farnborough", "Cove", "West Heath", "Hawley", "Rafborough", "Farnborough Green", "Farnborough Street"],
    landmarks: ["Farnborough Air Sciences Trust", "Farnborough International Exhibition Centre", "St Michael's Abbey", "Farnborough Main station", "Southwood Country Park"],
    drainageInfo: "Farnborough's development spans from its Victorian origins through post-war expansion to modern commercial zones. The aviation heritage area and older residential streets have ageing clay and cast iron pipe networks, while extensive 1950s-70s housing estates in Cove and West Heath feature concrete drainage now reaching the end of its design life. The Blackwater Valley's sandy heath soil provides good natural drainage but can allow pipe movement and sand infiltration into damaged joints.",
    responseTime: "typically within 30-45 minutes",
    propertyTypes: "Victorian terraces, 1950s-70s suburban housing, modern commercial premises, and military-related properties"
  },
  fleet: {
    neighborhoods: ["Church Crookham", "Elvetham Heath", "Ancells Farm", "Pondtail", "Crookham Village", "Zebon Copse", "Branksomewood", "Pilcot"],
    landmarks: ["Fleet Pond", "Basingstoke Canal", "the Hart Shopping Centre", "Gurkha Square", "Elvetham Heath Activity Centre"],
    drainageInfo: "Fleet and its surrounding villages combine a historic market town core with substantial modern development. The proximity of Fleet Pond, Hampshire's largest freshwater lake, and the Basingstoke Canal create elevated water table conditions that affect drainage performance in nearby properties. Church Crookham and Elvetham Heath are predominantly modern developments with well-planned drainage, while Fleet's town centre has older Victorian and Edwardian drainage systems that require ongoing maintenance.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Edwardian villas, inter-war semis, modern executive homes, new-build estates, and commercial units"
  },
  camberley: {
    neighborhoods: ["Old Dean", "Crawley Hill", "Yorktown", "Heatherside", "Frimley", "Frimley Green", "Deepcut", "Mytchett"],
    landmarks: ["the Atrium Shopping Centre", "Camberley Theatre", "Royal Military Academy Sandhurst nearby", "Frimley Park Hospital", "Blackwater Valley"],
    drainageInfo: "Camberley sits on the sandy heathland of the Surrey-Hampshire border, where Bagshot Sand and gravel create well-drained but shifting ground conditions. The town's mix of Victorian residential streets around the centre and extensive post-war development in areas like Old Dean and Heatherside means drainage systems vary widely in age and condition. Properties near the Blackwater Valley face seasonal water table fluctuations, while the sandy soil can allow pipe movement and joint displacement over time.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian villas, 1930s semis, post-war estates, modern executive homes, and commercial premises"
  },
  guildford: {
    neighborhoods: ["Stoke Park", "Onslow Village", "Park Barn", "Merrow", "Burpham", "Shalford", "Bellfields", "Stoughton"],
    landmarks: ["Guildford Castle", "Guildford Cathedral", "the Yvonne Arnaud Theatre", "the River Wey", "the High Street cobbles"],
    drainageInfo: "Guildford is Surrey's county town, with drainage infrastructure spanning from medieval times to modern developments. The steep High Street and surrounding older properties have some of the region's most complex drainage arrangements, while the River Wey and its floodplain create significant drainage challenges for properties along the valley floor. University of Surrey campus expansion and ongoing town centre development add modern systems alongside historic ones, creating a patchwork of old and new infrastructure.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "period townhouses, Victorian terraces, university accommodation, modern apartments, and riverside properties"
  },
  ash: {
    neighborhoods: ["Ash Vale", "Ash Green", "Ash Wharf", "Wyke", "Tongham", "Normandy", "Flexford", "Christmas Pie"],
    landmarks: ["Basingstoke Canal at Ash", "Ash railway station", "Ash Manor", "Tongham village", "Normandy Common"],
    drainageInfo: "Ash and the surrounding villages sit in a transitional zone between the sandy heathland of north-east Hampshire and the clay-rich lowlands of Surrey. This mixed geology means drainage conditions can vary significantly even within short distances. The Basingstoke Canal corridor creates localised high water tables, while the older village centres of Tongham and Ash Green have period drainage systems that date back to the Victorian era. Newer developments along the A331 corridor have modern drainage but may experience settling as ground conditions stabilise.",
    responseTime: "typically within 30-45 minutes",
    propertyTypes: "village cottages, Victorian terraces, inter-war housing, modern family homes, and rural properties"
  },
  yateley: {
    neighborhoods: ["Yateley Green", "Darby Green", "Frogmore", "Blackwater", "Hawley", "Minley", "Cricket Hill", "Chandlers Lane"],
    landmarks: ["Yateley Green", "Yateley Common Country Park", "the Blackwater River", "Trilakes Country Park", "Cricket Hill Pond"],
    drainageInfo: "Yateley and the surrounding communities sit on the Blackwater Valley heathlands, where sandy soils and a relatively high water table create specific drainage challenges. The area's residential development spans from Victorian village cores in Yateley Green and Darby Green to extensive 1960s-80s housing estates and modern developments in Frogmore and Blackwater. The proximity to the Blackwater River means seasonal flooding risk, while the sandy soil provides good permeability but can allow pipe movement around older drainage runs.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "period village houses, 1960s-80s estates, modern family homes, and detached properties"
  },
  sandhurst: {
    neighborhoods: ["College Town", "Owlsmoor", "Little Sandhurst", "Crowthorne", "Edgbarrow", "Broadmoor", "Finchampstead"],
    landmarks: ["Royal Military Academy Sandhurst", "The Meadows", "Sandhurst Memorial Park", "Shepherd Meadows", "Wellington College nearby"],
    drainageInfo: "Sandhurst and the surrounding area combine historic military town character with modern residential development. College Town and Owlsmoor are predominantly 1970s-90s housing estates with drainage systems now reaching maturity, while Little Sandhurst retains older village properties with period drainage. The area's Bagshot Sand geology provides natural drainage but the proximity to the Blackwater River and various streams creates localised high water tables. Properties near the Royal Military Academy benefit from well-maintained infrastructure in the immediate vicinity.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "1970s-90s estate housing, Victorian village properties, modern executive homes, and detached family houses"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  aldershot: {
    "blocked-drains": {
      intro: "Aldershot's military town heritage means blocked drains can affect anything from a Victorian garrison terrace to a modern apartment in North Camp. Our experienced engineers understand the unique drainage challenges facing properties across the town and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in residential kitchens across North Town", "Tree root intrusion from mature street trees in established areas", "Debris accumulation in Victorian and Edwardian clay pipes", "Wet wipe blockages in military housing and apartment blocks", "Foreign object obstructions in commercial premises around the Wellington Centre"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near the Basingstoke Canal and Tice's Meadow should consider annual drain inspections as the high water table can accelerate pipe deterioration and root intrusion."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Aldershot, you need a fast response from engineers who know the local area. Whether you're in North Town, Manor Park, or Redan Hill, our drain unblocking teams are strategically positioned to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in terraced housing", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Aldershot's busy takeaway restaurants along Victoria Road benefit from grease trap maintenance to prevent drain blockages building up over time."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Aldershot property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Aldershot's older military-era and Victorian properties.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Aldershot's older streets around North Town or Wellington? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Aldershot's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Aldershot's hard water from the Hampshire chalk aquifer contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Aldershot emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the town. From North Town terraces to Manor Park family homes, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Aldershot location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Aldershot's mix of historic military-era infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Aldershot's mixed London Clay and Bagshot Sand subsoil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  farnham: {
    "blocked-drains": {
      intro: "Farnham's rich architectural heritage means blocked drains can affect anything from a medieval property on Castle Street to a modern family home in Rowledge. Our Farnham specialists understand the differences between period Georgian properties along The Borough and the more recent housing in Badshot Lea and Wrecclesham, bringing the right expertise to every callout.",
      commonProblems: ["Root intrusion from mature garden trees and hedgerows in period properties", "Fat and grease buildup from busy household kitchens", "Debris accumulation in period clay pipes along Castle Street", "Surface water blockages near the River Wey", "Shared drainage issues in converted period properties"],
      process: "We assess each Farnham blockage considering the property type, pipe age, and drainage layout. Period properties along The Borough need different handling than modern estates in Badshot Lea, and our engineers adapt their approach accordingly.",
      localTip: "Farnham properties near the River Wey are at greater risk of flooding and drainage backup during heavy rain. Keep gullies clear and consider non-return valves on main drainage connections."
    },
    "drain-unblocking": {
      intro: "When drains block in Farnham, our local teams respond promptly with the right equipment for every property type. From Georgian townhouses on Castle Street to modern homes in Hale, we clear blockages efficiently while respecting your property.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Commercial drainage issues in the town centre"],
      process: "Our Farnham engineers arrive equipped for the area's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Farnham's leafy streets and mature gardens along Farnham Park are beautiful but pose significant root intrusion risks. Schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a period property on Castle Street or investigating drainage at a Farnham Maltings business unit, our CCTV surveys provide the detailed assessment you need. We reveal the true condition of pipes beneath Farnham's diverse range of properties.",
      commonProblems: ["Pre-purchase surveys for Georgian and Victorian properties", "Root ingress investigation in mature gardens", "Mapping complex drainage in town centre commercial premises", "Condition assessment of period pipe systems", "Insurance and renovation planning requirements"],
      process: "We survey Farnham properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Farnham home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Farnham's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from Georgian clay pipes along The Borough and clears root masses from garden-heavy properties in Rowledge, restoring optimal flow throughout your system.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for residential drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Farnham's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Farnham properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Farnham demand swift, professional response. Whether you're facing sewage backup in a period property or flooding at a Wrecclesham family home, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "Storm water overwhelming period drainage systems"],
      process: "Emergency calls from Farnham are prioritised and dispatched immediately. Our engineers understand the area's property types and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Farnham properties near the River Wey flood plain may experience increased surface water runoff during heavy rain. Ensure gullies and downpipe connections are clear, especially in autumn."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Farnham's varied properties requires specialist care. Our repair teams work with all property ages across the area, from restoring Georgian clay pipes in period townhouses to fixing modern systems in Badshot Lea and Wrecclesham.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Damage from extension and renovation projects"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Farnham's clay subsoil and mature tree cover cause seasonal ground movement. Flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  farnborough: {
    "blocked-drains": {
      intro: "Farnborough's development from Victorian origins through post-war expansion to modern commercial zones creates varied drainage challenges. Our Farnborough blocked drain specialists understand the differences between ageing clay pipe systems in the town centre and the mid-century concrete drainage in Cove and West Heath, bringing the right expertise to every callout.",
      commonProblems: ["Deteriorating concrete and clay pipes from the post-war expansion era", "Root intrusion from maturing street trees planted decades ago", "Fat accumulation in domestic drains", "Debris in shared drainage serving housing estates", "Surface water blockages from leaf litter in autumn"],
      process: "We assess each Farnborough blockage considering the property type, pipe material, and blockage characteristics before selecting the most effective clearing method. Post-war drainage routes are generally well-documented, which helps us diagnose issues efficiently.",
      localTip: "Farnborough's maturing trees in Cove and West Heath estates are now large enough to cause root intrusion in nearby drainage. Properties with trees close to pipe runs should have annual inspections."
    },
    "drain-unblocking": {
      intro: "When Farnborough drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From South Farnborough to Hawley, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages", "Commercial drainage issues near the exhibition centre"],
      process: "Our Farnborough engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Farnborough's post-war housing was built with shared drainage systems serving clusters of homes. If your neighbours also have slow drains, the blockage is likely in the communal section. Contact us to investigate."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Farnborough property's drainage is essential, particularly as the town's post-war infrastructure ages. Our CCTV surveys reveal the condition of pipes beneath your property, identifying deterioration that surface inspection cannot detect. This is increasingly valuable for Farnborough's mid-century housing stock.",
      commonProblems: ["Age-related pipe deterioration in 1950s-70s systems", "Root ingress from established street trees", "Pipe condition assessment for home purchases", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Farnborough properties built in the 1950s and 60s are now past the typical 50-year design life of their concrete drainage. A CCTV survey reveals how much service life remains."
    },
    "drain-jetting": {
      intro: "Farnborough's ageing post-war drainage benefits greatly from regular high-pressure jetting maintenance. Our specialist equipment removes the deposits that accumulate over decades in concrete and clay pipes, maintaining optimal flow in domestic and commercial drainage systems throughout the town.",
      commonProblems: ["Scale buildup in ageing pipes", "Grease accumulation", "Silt and debris deposits", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting the integrity of ageing pipe infrastructure. We verify results with flow testing.",
      localTip: "Farnborough businesses near the International Exhibition Centre and along the A325 should consider scheduled jetting as part of their maintenance regime, particularly food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Farnborough drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded ground floor in Cove or sewage backup in West Heath, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage from ageing infrastructure", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Farnborough's post-war drainage was designed for lower population density than the area now has. During heavy rainfall, systems can become overwhelmed. Keep emergency drain contacts readily available."
    },
    "drain-repairs": {
      intro: "Farnborough's housing stock is reaching the age where drainage repairs become increasingly necessary. Our repair specialists understand the materials and methods used in post-war construction and provide repair solutions that extend the life of ageing systems while delivering reliable results.",
      commonProblems: ["Cracked concrete drainage pipes", "Deteriorating clay pipe joints", "Root damage from established trees", "Ground settling causing pipe displacement", "Age-related material degradation"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Farnborough's Blackwater Valley sandy heathland soil can allow pipe movement over time. Consider proactive repair and relining rather than waiting for complete failure."
    }
  },
  fleet: {
    "blocked-drains": {
      intro: "Fleet's blend of historic market town properties and substantial modern developments in Church Crookham and Elvetham Heath creates varied drainage challenges. Our Fleet blocked drain specialists understand the differences between Victorian villas in the town centre and newer estates, bringing local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Root intrusion from mature garden trees in established streets", "Fat and grease buildup from busy household kitchens", "Debris accumulation in older Victorian clay pipes", "Surface water blockages near Fleet Pond and the Basingstoke Canal", "Shared drainage issues in newer housing developments"],
      process: "We assess each Fleet blockage considering the property type, drainage age, and local conditions. Older town centre properties need different handling than modern Elvetham Heath estates, and our engineers adapt their approach accordingly.",
      localTip: "Fleet properties near Fleet Pond and the Basingstoke Canal should have drainage inspected regularly, as the high water table and proximity to open water affect pipe integrity and increase root intrusion risk."
    },
    "drain-unblocking": {
      intro: "When Fleet drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Church Crookham to Ancells Farm, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Utility room drainage issues"],
      process: "Our Fleet engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Fleet's newer housing developments in Elvetham Heath and Zebon Copse sometimes experience drainage settling issues in the first few years. If multiple fixtures drain slowly, the problem may be in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Fleet property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable in Fleet where ground conditions near the Pond and Canal can affect pipe stability.",
      commonProblems: ["Unknown drainage routes in period properties", "Pipe condition assessment for home purchases", "Root ingress detection from mature gardens", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Buying a property in Fleet's older streets near the town centre? Always commission a full CCTV drain survey. Period drainage combined with mature tree roots can hide costly defects."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Fleet's drainage systems. Our specialist equipment handles everything from clearing root masses in the town centre's older properties to descaling pipes in Church Crookham's modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale buildup from water supply", "Grease accumulation in residential drains", "Silt and sediment from nearby water features", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Fleet properties near the Basingstoke Canal experience more silt buildup from groundwater. Consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Fleet drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden in Elvetham Heath or sewage backup in Church Crookham, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Fleet properties near Fleet Pond and low-lying areas can experience rapid surface water buildup after sustained rain. Keep emergency drain contacts readily available and know your manhole locations."
    },
    "drain-repairs": {
      intro: "Fleet's property stock spans Victorian villas to modern executive homes, and our drain repair expertise matches this diversity. From relining period pipes in the town centre to replacing damaged sections in Elvetham Heath, we provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked clay pipes in period properties", "Joint failures from ground movement", "Root damage from established trees", "Ground settling effects on newer developments", "Age-related pipe deterioration"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Fleet's variable ground conditions near Fleet Pond and the Canal mean pipe stability can be affected by seasonal water table changes. Always commission a proper survey before planning drainage repair work."
    }
  },
  camberley: {
    "blocked-drains": {
      intro: "Camberley's mix of Victorian residential streets, post-war estates, and modern developments creates diverse drainage challenges. Our Camberley blocked drain specialists understand how the sandy heathland conditions and varied property stock affect drainage systems, from Old Dean's terraces to Heatherside's family homes.",
      commonProblems: ["Sand infiltration into drainage systems from surrounding heathland", "Root intrusion from garden trees in established streets", "Fat and grease buildup from domestic kitchens", "Debris accumulation in Victorian clay pipes around the town centre", "Surface water issues on low-lying properties near the Blackwater Valley"],
      process: "We assess your Camberley property's position and drainage layout before selecting clearing methods. The sandy heathland conditions mean approaches may differ from clay-soil areas. Our engineers are experienced with all property types across Camberley and Frimley.",
      localTip: "Camberley's sandy Bagshot soil can shift around pipes, creating gaps where debris enters the system. Properties on the heath should have drainage checked more frequently than those on firmer ground."
    },
    "drain-unblocking": {
      intro: "When drains block in Camberley, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Yorktown or an overflowing external drain in Frimley Green, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Camberley engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Camberley's Victorian properties along the London Road often have rear drainage running close to neighbouring boundaries. Know your drainage layout to identify the responsible party when blockages occur."
    },
    "cctv-drain-surveys": {
      intro: "Camberley's varied property market, from Victorian villas to modern executive homes, makes drainage condition assessment increasingly important. Our CCTV surveys reveal exactly what's inside your pipes, providing essential information for property transactions and ongoing maintenance across Camberley and the surrounding area.",
      commonProblems: ["Sand and silt infiltration assessment in heathland areas", "Age-related pipe deterioration in Victorian properties", "Root ingress from established gardens", "Drainage route mapping before renovations", "Condition assessment for property purchases"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any heathland-specific issues. The final report includes annotated footage, a condition summary, and maintenance recommendations.",
      localTip: "Purchasing a Victorian villa in Camberley's town centre? A pre-purchase CCTV survey is essential. Sandy conditions accelerate pipe movement and hidden defects are common in older properties."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Camberley's drainage systems often need. Our service removes sand, silt, and scale deposits from Victorian pipes and clears accumulated debris from properties throughout Heatherside and Frimley.",
      commonProblems: ["Sand and silt accumulation from heathland conditions", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. Heathland properties often have sand and silt that requires specific nozzle selection for effective removal.",
      localTip: "Camberley's sandy heathland properties experience faster silt accumulation than clay-soil areas. Consider jetting every 12 months rather than the usual 18 to maintain optimal flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Camberley receive rapid response from our local teams, day or night. From flooded properties near the Blackwater Valley to sewage issues in Old Dean, our engineers are ready to tackle any emergency and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Flooding from overwhelmed drainage during storms", "Overflowing inspection chambers", "Collapsed drains in sandy soil", "Storm water affecting low-lying properties"],
      process: "Emergency calls to our Camberley service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Camberley properties near the Blackwater Valley should have non-return valves fitted on main drainage connections to prevent storm water from forcing water back into the system."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Camberley's sandy heathland conditions requires understanding the specific challenges of shifting ground, and the area's mix of Victorian and modern properties. Our repair specialists select methods and materials suited to these conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from sand movement", "Root damage from garden vegetation", "Joint displacement in sandy soil", "Age-related deterioration in Victorian systems", "Sand infiltration through damaged joints"],
      process: "We assess Camberley drainage repairs with ground conditions in mind. Materials are chosen for durability in sandy soil, and repair methods account for the mobile ground conditions prevalent across the heathland areas.",
      localTip: "Camberley's sandy soil conditions can make traditional excavation repairs more straightforward than in heavy clay areas, but pipe bedding must be done carefully to prevent future settlement."
    }
  },
  guildford: {
    "blocked-drains": {
      intro: "Guildford's status as Surrey's county town brings with it drainage challenges spanning centuries. From medieval properties near the castle to modern apartments along the riverside, our Guildford blocked drain service combines deep local knowledge with specialist equipment to clear any obstruction quickly and effectively.",
      commonProblems: ["Tree root intrusion from mature gardens in established suburbs", "Aged clay pipe deterioration in period properties", "Fat buildup from busy household kitchens", "Leaf debris in autumn from tree-lined streets", "Shared drainage in converted period properties near the town centre"],
      process: "We approach Guildford blocked drains with appreciation for the area's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Guildford properties near the River Wey flood plain in Shalford and Millmead are at greater risk of drainage backup during wet weather. Keep external drains clear and consider a maintenance plan."
    },
    "drain-unblocking": {
      intro: "Guildford residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls from Stoke Park to Merrow, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Cellar drainage issues in older town centre properties"],
      process: "Our Guildford engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Guildford's Victorian properties along the High Street and surrounding streets often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Guildford's premium property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the area's sought-after period and modern homes.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey Guildford properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Guildford home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points in Surrey's competitive property market."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Guildford's period drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features.",
      commonProblems: ["Scale from water supply", "Grease accumulation over time", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "Guildford's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Guildford's chalk-influenced water supply contributes to mineral scale deposits. Periodic jetting maintains optimal performance and extends drainage lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Guildford receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a period townhouse or flooding in a riverside apartment, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into cellars and ground floors", "Garden flooding from blocked drains", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Guildford properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Guildford properties with cellars and basements should ensure drainage pumps and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Guildford's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects", "Historical modification issues", "Cellar drainage problems"],
      process: "We investigate Guildford drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Guildford's Victorian and Georgian drainage often includes original salt-glazed pipes. These can be repaired and relined rather than replaced, preserving heritage features while restoring function."
    }
  },
  ash: {
    "blocked-drains": {
      intro: "Ash and the surrounding villages of Tongham and Normandy blend historic village centres with modern residential development, each with their own drainage characteristics. Our Ash blocked drain service covers everything from Tongham's traditional cottages to Ash Vale's newer family homes, bringing local expertise to every callout.",
      commonProblems: ["Root intrusion from established village trees and hedgerows", "Fat and grease buildup in domestic kitchens", "Debris accumulation in older village drainage systems", "Surface water blockages from leaf litter on rural roads", "Shared drainage conflicts in terraced village housing"],
      process: "We assess each Ash area blockage considering the property type, drainage age, and local conditions. Traditional village properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Ash properties near the Basingstoke Canal should have drainage inspected after periods of heavy rainfall when debris and silt can accumulate rapidly from the raised water table."
    },
    "drain-unblocking": {
      intro: "When Ash drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Ash Vale to Tongham, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older village properties", "Utility room drainage issues"],
      process: "Our Ash engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Ash's older village properties often have deep inspection chambers with narrow access. Ensure manhole covers are accessible and in good condition for maintenance visits."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Ash property's drainage is essential for proper maintenance. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable in the Ash area where the mixed geology of sand and clay creates variable ground conditions.",
      commonProblems: ["Unknown drainage routes in period village properties", "Pipe condition assessment for home purchases", "Root ingress detection from mature gardens and hedgerows", "Joint and connection problems from ground settling", "Planning investigation for extensions in conservation areas"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Ash and Tongham village centres have conservation area status in places. Surveys help understand historic drainage arrangements before any building or renovation work."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting maintains Ash area drainage at peak performance. Our specialist equipment handles everything from clearing root masses in Tongham's older properties to descaling pipes in Ash Vale's modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale buildup from water supply", "Grease accumulation in residential drains", "Silt and sediment from nearby canal and streams", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Ash properties near the Basingstoke Canal corridor experience more silt buildup. Consider jetting every 12 months rather than the usual 18 to prevent gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Ash drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden in Ash Vale or sewage backup in Tongham, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on village streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Ash's mixed geology of sand and clay means water runoff can be unpredictable during heavy rain. Keep gullies and surface water drains clear, especially in autumn when leaf fall is heavy."
    },
    "drain-repairs": {
      intro: "Ash's property stock spans traditional village cottages to modern family homes, and our drain repair expertise matches this diversity. From relining Victorian pipes in Tongham to replacing damaged sections in Ash Vale, we provide repair solutions appropriate to each property type and ground condition.",
      commonProblems: ["Cracked clay pipes in period village properties", "Joint failures from mixed ground conditions", "Root damage from established hedgerows and trees", "Ground settling effects on newer developments", "Canal-proximity water table effects"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Ash's transitional geology between sand and clay means ground conditions can vary over short distances. Always commission a proper survey before planning drainage repair work."
    }
  },
  yateley: {
    "blocked-drains": {
      intro: "Yateley and the surrounding communities of Darby Green, Frogmore, and Blackwater combine period village character with extensive modern residential development. Our Yateley blocked drain service covers the full range of property types, from Victorian village houses to 1980s estates and contemporary new builds.",
      commonProblems: ["Root intrusion from mature heathland trees and garden vegetation", "Fat and grease buildup in domestic kitchens", "Debris accumulation in older drainage systems", "Surface water blockages near the Blackwater River", "Shared drainage issues in estate housing"],
      process: "We assess each Yateley blockage considering the property type, pipe material, and the area's sandy heathland conditions before selecting the most effective clearing method.",
      localTip: "Yateley properties near Yateley Common and the Blackwater River are at greater risk of water table-related drainage issues. Regular maintenance prevents problems before they become emergencies."
    },
    "drain-unblocking": {
      intro: "When drains block in Yateley, our local teams respond promptly with the right equipment. From Yateley Green to Blackwater, we clear blockages efficiently in all property types, from period village houses to modern family homes.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Yateley engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique.",
      localTip: "Yateley's 1970s and 80s estate housing often shares drainage between properties. If neighbours are also experiencing slow drains, the blockage may be in the communal section."
    },
    "cctv-drain-surveys": {
      intro: "Yateley's varied property stock, from period village houses to modern estates, makes drainage surveys an important tool for homeowners and buyers. Our CCTV surveys reveal the true condition of underground pipes, helping you make informed decisions about maintenance and property purchases.",
      commonProblems: ["Age-related pipe deterioration in older properties", "Root ingress from established garden vegetation", "Drainage route mapping before renovations", "Condition assessment for property purchases", "Ground settling assessment in estate housing"],
      process: "We survey your entire drainage system, documenting condition and identifying any defects. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing a property in Yateley? Sandy heathland conditions can conceal drainage defects that may not show obvious surface symptoms. A CCTV survey gives you peace of mind."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Yateley's drainage systems across all property ages. From clearing accumulated deposits in older village properties to routine maintenance for modern estates in Frogmore and Blackwater, our jetting service restores optimal drainage performance.",
      commonProblems: ["Sand and silt accumulation from heathland conditions", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage.",
      localTip: "Yateley's sandy heathland soil means silt can accumulate faster in drainage. Regular jetting prevents gradual flow reduction and helps maintain system capacity."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Yateley receive rapid response from our local teams, day or night. From flooded gardens in Frogmore to sewage issues in Darby Green, our engineers are ready to tackle any emergency and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains in sandy soil", "Storm damage to drainage systems"],
      process: "Emergency calls to our Yateley service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Yateley's proximity to the Blackwater River means flooding risk during sustained heavy rain. Keep gullies clear and ensure your property has functioning surface water drainage."
    },
    "drain-repairs": {
      intro: "Yateley's drainage spans from period village systems to modern estate infrastructure, and our repair teams work confidently with all types. We select repair methods and materials suited to the area's sandy heathland ground conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from ground movement in sandy soil", "Root damage from garden vegetation", "Joint displacement from seasonal ground changes", "Age-related deterioration", "Sand infiltration through damaged joints"],
      process: "We investigate thoroughly before recommending repairs. Our approach accounts for Yateley's heathland terrain and ground conditions, using durable materials that provide long-lasting results in sandy soil.",
      localTip: "Yateley's sandy soil provides good natural drainage but can allow pipe movement over time. Flexible repair solutions like pipe relining accommodate this better than rigid pipe replacement."
    }
  },
  sandhurst: {
    "blocked-drains": {
      intro: "Sandhurst and the surrounding areas of College Town, Owlsmoor, and Little Sandhurst combine military heritage with modern residential development. Our Sandhurst blocked drain service handles properties from the 1970s-90s estate housing to period village properties in Little Sandhurst, bringing local knowledge to every callout.",
      commonProblems: ["Deteriorating pipe systems in 1970s-90s estate housing reaching maturity", "Root intrusion from established garden trees and street planting", "Fat and grease buildup in domestic drains", "Surface water blockages from leaf litter in autumn", "Shared drainage issues in College Town estates"],
      process: "We assess each Sandhurst blockage considering the property age, pipe material, and ground conditions. Estate housing from different decades has different drainage characteristics, and our engineers adapt accordingly.",
      localTip: "Sandhurst's College Town and Owlsmoor estates have drainage systems now reaching 30-50 years old. Properties experiencing repeat blockages should consider a CCTV survey to check overall pipe condition."
    },
    "drain-unblocking": {
      intro: "When Sandhurst drains need unblocking, our local teams respond quickly with the right equipment. From College Town to Little Sandhurst, we handle residential drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs", "External gulley obstructions", "Toilet blockages in family homes", "Washing machine and utility drain problems"],
      process: "Our Sandhurst engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Sandhurst's estate housing often shares drainage systems between groups of properties. If your neighbours also have slow drains, contact us to check the communal drainage section."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Sandhurst property's drainage is increasingly important as the area's estate housing matures. Our CCTV surveys reveal the condition of ageing pipes, identifying deterioration before it causes emergencies. This is valuable for both existing homeowners and buyers considering properties in Sandhurst's popular residential areas.",
      commonProblems: ["Age-related pipe deterioration in 1970s-90s systems", "Root ingress from established trees", "Pipe condition assessment for home purchases", "Joint and connection problems from ground settling", "Planning investigation for extensions and renovations"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Sandhurst properties built in the 1970s and 80s are now past the typical 40-50 year design life of their original drainage. A CCTV survey reveals how much service life remains and helps plan maintenance."
    },
    "drain-jetting": {
      intro: "Sandhurst's maturing estate housing benefits from regular high-pressure jetting maintenance. Our specialist equipment removes the deposits that accumulate over decades in concrete and plastic pipes, maintaining optimal flow in residential drainage systems across College Town, Owlsmoor, and Little Sandhurst.",
      commonProblems: ["Scale buildup in ageing pipes", "Grease accumulation over time", "Silt and debris deposits from sandy ground", "Root fragments requiring removal", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting pipe integrity. We verify results with flow testing.",
      localTip: "Sandhurst's sandy Bagshot formation soil means silt can enter drainage through damaged joints more readily. Regular jetting combined with repair of any defects keeps systems working efficiently."
    },
    "emergency-drain-services": {
      intro: "Sandhurst drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing flooding in College Town or sewage backup in Owlsmoor, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains during storms", "Overflowing manholes on estate roads", "Collapsed drainage from ageing infrastructure", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Sandhurst's proximity to the Blackwater River and local streams means some areas are prone to surface water issues during heavy rain. Know your manhole locations and keep gullies clear."
    },
    "drain-repairs": {
      intro: "Sandhurst's estate housing is reaching the age where proactive drainage repair becomes increasingly valuable. Our repair specialists understand the materials used in 1970s-90s construction and provide solutions that extend system life while delivering reliable performance.",
      commonProblems: ["Cracked concrete and early plastic pipes", "Joint failures from ground settling", "Root damage from maturing garden trees", "Age-related material degradation", "Ground movement effects in sandy soil"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options. No-dig relining is often ideal for estate housing, avoiding disruption to driveways, gardens, and landscaping.",
      localTip: "Sandhurst's Bagshot Sand geology means pipes can shift gradually over time. Consider proactive relining of original drainage to prevent emergency failures during the worst weather."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Thames Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Thames Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Aldershot and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Aldershot and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Aldershot and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Aldershot and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}

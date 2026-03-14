/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  aldershot: {
    landmarks: [
      "Princes Hall Theatre",
      "Aldershot Military Museum",
      "Princes Gardens",
      "Wellington Centre",
      "West End Centre",
      "Manor Park",
      "Wellesley Woodlands",
      "Aldershot Town Football Club",
      "St Michael the Archangel Church",
      "Heroes' Shrine",
      "Aldershot Lido",
      "Municipal Gardens",
      "Victoria Road Shopping Area",
      "Basingstoke Canal",
      "North Town",
      "Tice's Meadow Nature Reserve"
    ],
    drainageProfile: `Aldershot's drainage infrastructure reflects its unique history as the home of the British Army. Many of the town's properties date from the Victorian era, built to house military personnel and their families, and feature original clay pipe drainage systems that are now well over a century old. The town sits on a mix of London Clay and Bagshot Beds geology, which can affect how drainage systems perform, particularly during heavy rainfall when clay soils become saturated and surface water drainage comes under pressure. Areas around North Town and the town centre have some of the oldest drainage networks, while the newer Wellesley development on former Ministry of Defence land features modern drainage systems. The Basingstoke Canal runs through the area, and properties close to the canal or the Blackwater River can experience groundwater-related drainage issues. South East Water manages the water supply in the area, while Thames Water handles sewerage for most properties. Our engineers are familiar with Aldershot's mixed drainage heritage and carry the specialist equipment needed to work with both Victorian clay pipes and modern plastic systems.`,
    localFAQs: [
      {
        question: "What are the most common drainage problems in Aldershot?",
        answer: "The most common issues we see in Aldershot are blocked drains caused by fat and grease buildup, tree root ingress into ageing Victorian clay pipes, and displaced pipe joints from ground movement. Properties in North Town and around the older military housing estates are particularly prone to these issues due to the age of the drainage infrastructure."
      },
      {
        question: "Do you cover the Wellesley development area?",
        answer: "Yes, we cover the entire Wellesley development as well as all other areas of Aldershot. While newer properties tend to have fewer drainage issues, we still attend callouts for blockages, CCTV surveys for new homeowners, and maintenance jetting."
      },
      {
        question: "How quickly can you get to Aldershot for an emergency?",
        answer: "As a local company, we typically arrive within 45 to 60 minutes for emergency drainage callouts in Aldershot. Our engineers are based in the area and know the local roads well, so we can respond quickly even during busy periods."
      },
      {
        question: "Can you work on drains near the Basingstoke Canal?",
        answer: "Yes, we regularly work on properties near the Basingstoke Canal. These properties can experience specific drainage challenges related to high water tables and groundwater infiltration. Our engineers carry the appropriate equipment and have experience dealing with the particular conditions found near waterways."
      }
    ],
    caseStudy: `Call-out to a Victorian terrace on Victoria Road: The homeowner reported persistent slow drainage affecting the kitchen sink and downstairs toilet, with occasional sewage odour in the garden. Our CCTV survey revealed a classic problem found in many older Aldershot properties — the original Victorian clay drain had suffered multiple fractures, likely caused by a combination of age and root ingress from a mature lime tree near the property boundary. Tree roots had penetrated through displaced joints and were filling approximately 60% of the pipe diameter, creating a recurring blockage cycle. We first cleared the roots and debris using high-pressure jetting, then carried out a structural pipe reline of the affected 12-metre section using a resin-impregnated liner. This trenchless approach meant we could complete the repair without excavating the garden path or disturbing the mature landscaping. Result: full drainage flow restored and the new liner prevents future root ingress while extending the drain's life by an estimated 50 years. Tip: older Aldershot properties with mature trees nearby should consider a precautionary CCTV survey every few years to catch root ingress before it causes a complete blockage.`
  },
  farnham: {
    landmarks: [
      "Farnham Castle",
      "Museum of Farnham",
      "The Borough",
      "Farnham Maltings",
      "Farnham Park",
      "Hale Recreation Ground",
      "Bourne Mill",
      "Waverley Abbey",
      "The Bishops Table",
      "South Street",
      "St Andrew's Church",
      "River Wey",
      "Weybourne",
      "Upper Hale",
      "Wrecclesham"
    ],
    drainageProfile: `Farnham is a historic market town with a wealth of Georgian and Victorian properties, many of which retain their original drainage systems. The town sits in the valley of the River Wey, and its proximity to this watercourse means that properties in lower-lying areas such as The Borough and around East Street can be susceptible to groundwater-related drainage issues, particularly during winter months. The surrounding hills of the North Downs create natural drainage patterns that funnel surface water through the town, placing additional pressure on older drainage infrastructure during heavy rainfall. Farnham's conservation area status means that many properties have restrictions on external alterations, making trenchless repair methods particularly valuable. Our engineers understand the specific drainage challenges of Farnham's varied property stock, from Georgian townhouses on Castle Street to Victorian terraces in Weybourne and modern developments on the outskirts.`,
    localFAQs: [
      {
        question: "What drainage issues are common in Farnham?",
        answer: "Farnham's older Georgian and Victorian properties frequently experience drainage problems caused by ageing clay pipes, tree root ingress, and displaced joints. Properties near the River Wey can also face groundwater infiltration issues. Fat and grease buildup is common in the town centre where restaurants and takeaways share drainage infrastructure."
      },
      {
        question: "Can you work on listed buildings in Farnham?",
        answer: "Yes, we have experience working on drainage systems at listed and conservation area properties in Farnham. Our trenchless repair methods, including pipe relining, are particularly suited to heritage properties because they avoid the need for disruptive excavation that might affect historic structures or protected features."
      },
      {
        question: "How quickly can you reach Farnham?",
        answer: "We typically arrive in Farnham within 45 to 60 minutes for emergency callouts. Farnham is one of our core service areas and we always have engineers positioned to respond quickly."
      }
    ],
    caseStudy: `Call-out to a Georgian townhouse near The Borough: The property owner reported persistent drainage problems including slow-draining bathroom fixtures and occasional sewage backing up in the cellar. Our CCTV survey revealed a collapsed section of the original brick barrel drain running beneath the rear garden, approximately 8 metres from the property. The collapse had been caused by the gradual deterioration of the lime mortar joints over nearly 200 years. Because the property sits within Farnham's conservation area, we opted for a trenchless patch repair approach, inserting a structural liner to bridge the collapsed section without excavating the period garden features. We also jetted the entire drainage run to remove accumulated silt and debris. Result: drainage fully restored with no visible disruption to the property's exterior or garden, and the repair is expected to last well over 50 years.`
  },
  farnborough: {
    landmarks: [
      "Farnborough International Airshow",
      "FAST Museum",
      "Farnborough Airport",
      "St Michael's Abbey",
      "Farnborough Hill",
      "Prospect Avenue",
      "Farnborough Main Station",
      "Cove Brook",
      "Southwood Country Park",
      "Victoria Road",
      "Clockhouse Roundabout",
      "Farnborough North",
      "Farnborough Business Park",
      "Cove"
    ],
    drainageProfile: `Farnborough is a Hampshire town with a rich aviation heritage and a mix of Victorian terraces, inter-war semis, and modern developments around the business parks and town centre. The town's drainage infrastructure varies significantly by area — older properties around Farnborough North and the streets near the railway station have clay pipe systems dating from the late 1800s, while Cove and newer developments feature more modern drainage. The Cove Brook runs through the town, and properties near this watercourse can experience drainage complications during periods of high rainfall. Farnborough's sandy soils in some areas provide good natural drainage, but clay pockets elsewhere can cause problems with waterlogging and slow drainage. Our engineers are well-acquainted with the varied drainage systems across Farnborough and carry equipment suitable for all pipe types and conditions.`,
    localFAQs: [
      {
        question: "What drainage problems do Farnborough homes typically have?",
        answer: "Common issues in Farnborough include blocked drains from fat and grease buildup, tree root ingress in the older parts of town, and surface water drainage problems in areas with clay soil. Properties around Cove and near the Cove Brook can also experience issues with high groundwater levels affecting drainage performance."
      },
      {
        question: "Do you cover the business parks in Farnborough?",
        answer: "Yes, we provide commercial drainage services to businesses throughout Farnborough, including the business parks near the airport. We offer scheduled maintenance contracts and emergency callouts for commercial properties of all sizes."
      },
      {
        question: "How fast can you reach Farnborough?",
        answer: "We typically arrive in Farnborough within 30 to 50 minutes for emergency callouts, as it is one of our closest service areas to our base in Aldershot."
      }
    ],
    caseStudy: `Call-out to a 1930s semi-detached house in Cove: The homeowner reported that the downstairs toilet and kitchen sink were both draining very slowly, with occasional gurgling noises. Our CCTV investigation revealed a significant fat and grease buildup throughout the main drain run, combined with a partial collapse at a joint approximately 6 metres from the manhole. The clay pipes, original to the property, had suffered frost damage at the joint, allowing soil to ingress and creating a ledge that trapped grease and debris. We cleared the blockage and fat buildup using high-pressure jetting, then carried out a localised patch repair on the damaged joint using a resin liner. Result: full flow restored and the repaired joint is now structurally sound and resistant to further soil ingress. Tip: 1930s properties in Farnborough often have shallow drain runs that are vulnerable to frost damage — regular CCTV checks can catch problems early.`
  },
  fleet: {
    landmarks: [
      "Fleet Pond",
      "Fleet Road",
      "Gurkha Square",
      "Harlington Centre",
      "Views at Fleet",
      "Elvetham Heath",
      "Ancells Farm",
      "Crookham Village",
      "Church Crookham",
      "Fleet Railway Station",
      "Basingbourne Park",
      "Pondtail",
      "Calthorpe Park"
    ],
    drainageProfile: `Fleet is the largest town in Hart district, centred around Fleet Pond, the largest freshwater lake in Hampshire. The town has a mix of established 1960s and 1970s residential estates, Victorian and Edwardian properties near Fleet Road, and newer developments at Elvetham Heath and Ancells Farm. Fleet's drainage infrastructure reflects this mix — older properties may have clay or pitch fibre pipes, while newer estates have modern plastic drainage. The town's proximity to Fleet Pond and local watercourses means that groundwater levels can affect drainage performance, particularly in lower-lying areas. The clay-rich soils in parts of Fleet can also contribute to slow drainage and surface water problems. Our engineers are experienced with all the drainage system types found across Fleet and the surrounding areas of Church Crookham and Crookham Village.`,
    localFAQs: [
      {
        question: "What drainage issues are specific to Fleet?",
        answer: "Fleet properties commonly experience issues with tree root ingress due to the town's mature tree cover, particularly around Fleet Pond and the older residential streets. Properties from the 1960s and 70s may have pitch fibre pipes that deteriorate over time, causing progressive drainage slowdowns. Clay soils in some areas can also contribute to waterlogging."
      },
      {
        question: "Do you cover Elvetham Heath and Church Crookham?",
        answer: "Yes, we cover all areas of Fleet including Elvetham Heath, Church Crookham, Crookham Village, and Ancells Farm. Whether you have a modern property on a new estate or an older home near Fleet Road, our engineers can help."
      },
      {
        question: "How long does it take you to get to Fleet?",
        answer: "We typically arrive in Fleet within 45 to 70 minutes for emergency callouts. Fleet is well-connected via the A3013 and M3, and we always aim for the fastest possible response."
      }
    ],
    caseStudy: `Call-out to a 1970s detached house in Ancells Farm: The homeowner had experienced recurring kitchen drain blockages over several months, despite attempts to clear them with shop-bought drain cleaners. Our CCTV survey revealed that the property's original pitch fibre drainage had begun to delaminate internally, with the pipe walls blistering and reducing the effective bore by approximately 50%. This is a common failure mode in pitch fibre pipes of this age. Accumulated grease was catching on the rough internal surface, creating frequent blockages. We carried out a full high-pressure jetting to clear the pipes, followed by structural relining of the 15-metre main drain run. The resin liner created a smooth new pipe surface within the old pitch fibre, permanently resolving both the delamination and the grease buildup problem. Result: no further blockages and a drainage system that should last decades. Tip: Fleet properties built in the 1960s-70s with pitch fibre drains should consider proactive relining before problems become severe.`
  },
  camberley: {
    landmarks: [
      "The Atrium Shopping Centre",
      "Camberley Theatre",
      "London Road Recreation Ground",
      "Royal Military Academy Sandhurst",
      "Frimley Lodge Park",
      "High Street",
      "Crawley Ridge",
      "Old Dean",
      "Heatherside",
      "Watchetts Recreation Ground",
      "St Tarcisius Catholic Church",
      "Tekels Park",
      "Tomlinscote"
    ],
    drainageProfile: `Camberley sits in the Surrey Heath district, close to the Hampshire and Berkshire borders. The town has a diverse housing stock ranging from Victorian and Edwardian properties along London Road and the High Street to inter-war and post-war housing in Old Dean and Heatherside, and modern developments around the town centre. Camberley's position on the Bagshot Beds formation means sandy soils predominate in some areas, offering good natural drainage, while pockets of London Clay elsewhere can cause drainage challenges. The town's extensive heathland surroundings and mature pine trees contribute to leaf litter and organic debris entering drainage systems, particularly in autumn. Properties on Crawley Ridge enjoy elevated positions but their drainage runs can be affected by the steep gradients. Our engineers understand Camberley's varied geology and housing stock and carry equipment suitable for all conditions.`,
    localFAQs: [
      {
        question: "What are common drainage issues in Camberley?",
        answer: "Common issues include blocked gutters and surface drains from pine needle and leaf debris, tree root ingress from the area's mature trees, and varied drainage performance depending on whether a property sits on sand or clay geology. Older properties around London Road often have ageing clay pipe systems that benefit from regular maintenance."
      },
      {
        question: "Do you cover Frimley and Mytchett?",
        answer: "Yes, we cover Camberley and all surrounding areas including Frimley, Frimley Green, Mytchett, and Deepcut. Our engineers regularly attend callouts across the wider Surrey Heath area."
      },
      {
        question: "How quickly can you get to Camberley?",
        answer: "We typically arrive in Camberley within 40 to 60 minutes for emergency callouts. Camberley is easily accessible from our Aldershot base via the A331 Blackwater Valley Road."
      }
    ],
    caseStudy: `Call-out to an Edwardian semi-detached property on London Road: The homeowner reported sewage smells in the garden and slow drainage from all ground-floor fixtures. Our CCTV survey discovered that the main drain, running along the side of the property towards the public sewer, had suffered a partial collapse where a mature Scots pine had sent roots through a crack in the clay pipe. The roots had formed a dense mass that was blocking approximately 80% of the pipe. We removed the root mass using high-pressure jetting with a root-cutting nozzle, then assessed the structural damage. A 3-metre section of pipe was too badly damaged for relining, so we carried out a targeted excavation and replacement with modern PVC pipe, with root barriers installed to prevent regrowth. The remaining drainage was in acceptable condition after jetting. Result: full drainage restored and root protection installed for the long term. Tip: Camberley properties with mature pine trees within 5 metres of drain runs should have regular CCTV checks to catch root ingress early.`
  },
  guildford: {
    landmarks: [
      "Guildford Cathedral",
      "Guildford Castle",
      "High Street",
      "River Wey",
      "Yvonne Arnaud Theatre",
      "G Live",
      "Guildford Museum",
      "University of Surrey",
      "Stoke Park",
      "Shalford",
      "Onslow Village",
      "Park Barn",
      "Stoughton",
      "Merrow",
      "Spectrum Leisure Centre"
    ],
    drainageProfile: `Guildford, the county town of Surrey, is a historic cathedral city built along the valley of the River Wey. The city's varied topography — from the riverside areas of the town centre to the elevated chalk ridge where the cathedral sits — creates diverse drainage challenges. Properties in lower-lying areas near the river are susceptible to high groundwater levels and flooding during heavy rainfall, while properties on the chalk hillsides can experience drainage issues related to the steep gradients and varied geology. Guildford's housing stock spans centuries, from medieval buildings in the High Street to Georgian and Victorian properties, post-war estates in Park Barn and Stoughton, and modern developments around the university. The River Wey Navigation canal also runs through the area, adding another waterway that affects local drainage patterns. Thames Water manages the sewerage network in Guildford, and our engineers are experienced with the wide range of drainage systems found across the city.`,
    localFAQs: [
      {
        question: "What drainage problems are common in Guildford?",
        answer: "Guildford's riverside location means flooding and high groundwater are concerns for properties near the River Wey. The varied geology — chalk, clay, and sand — creates different drainage challenges in different parts of the city. Tree root ingress is common in the older residential areas, and fat buildup affects properties near the town centre's restaurants and food outlets."
      },
      {
        question: "Do you cover areas outside Guildford town centre?",
        answer: "Yes, we cover the whole of Guildford including Onslow Village, Park Barn, Stoughton, Merrow, Shalford, Chilworth, and Compton. Our engineers know the area well and can respond quickly to any part of the city."
      },
      {
        question: "How quickly can you reach Guildford?",
        answer: "We typically arrive in Guildford within 50 to 75 minutes for emergency callouts, depending on which part of the city you are in. Guildford is accessible via the A31 and A3, and we prioritise emergency calls for rapid dispatch."
      }
    ],
    caseStudy: `Call-out to a Victorian cottage in Shalford: The homeowner reported recurring drainage problems and a persistent damp smell in the ground floor. Our CCTV survey revealed that the property's original Victorian brick drain had deteriorated significantly, with multiple sections showing missing mortar and cracked bricks. The proximity to the River Wey meant that groundwater was infiltrating the damaged drain, causing it to run at near-capacity even during dry weather. During rain events, the system simply could not cope. We recommended and carried out a full structural reline of the 18-metre main drain using a UV-cured liner, which sealed the groundwater infiltration points and restored the drain to full capacity. We also jetted the entire system to remove accumulated silt. Result: drainage capacity restored, groundwater infiltration eliminated, and the persistent damp issue resolved. Tip: Guildford properties near the River Wey should be alert to unexplained dampness, which may indicate groundwater entering damaged drains rather than a rising damp problem.`
  },
  ash: {
    landmarks: [
      "Basingstoke Canal",
      "Ash Railway Station",
      "Ash Vale",
      "Ash Green",
      "Ash Manor",
      "Carrington Recreation Ground",
      "Ash Ranges",
      "Mytchett Canal Centre",
      "Lakeside Park",
      "Shawfield Road",
      "Harpers Road"
    ],
    drainageProfile: `Ash is a village and civil parish in Hampshire, positioned between Aldershot and Guildford along the A323. The area encompasses Ash Vale, Ash Green, and the surrounding rural areas. The Basingstoke Canal runs through Ash Vale, and the proximity of this waterway, combined with several local streams, means that properties in lower-lying parts of the area can be affected by high water tables. Ash has a mix of housing from different periods — Victorian cottages around the village centre, inter-war and post-war housing along the main roads, and modern developments. The varied geology includes areas of sand and gravel near the canal and clay deposits elsewhere. Drainage systems range from original Victorian clay pipes to modern plastic installations, and our engineers are equipped to work with all types. The rural edges of the parish also include properties on private drainage systems, including septic tanks, which we also service.`,
    localFAQs: [
      {
        question: "What drainage problems do properties in Ash commonly face?",
        answer: "Properties near the Basingstoke Canal and local watercourses often face issues with high groundwater affecting drainage performance. Older properties in Ash Vale and the village centre may have ageing clay pipes prone to root ingress and joint displacement. Properties on the rural edges sometimes have private drainage systems that require specialist maintenance."
      },
      {
        question: "Do you work on private drainage systems and septic tanks?",
        answer: "Yes, we provide services for private drainage systems including septic tanks, soakaways, and private sewage treatment plants. These are common in the more rural parts of Ash and surrounding areas. We can carry out inspections, maintenance, and repairs."
      },
      {
        question: "How quickly can you reach Ash?",
        answer: "Ash is one of our closest service areas, and we can typically arrive within 20 to 40 minutes for emergency callouts. Our proximity means faster response times and lower travel costs."
      }
    ],
    caseStudy: `Call-out to a property near the Basingstoke Canal in Ash Vale: The homeowner reported that external drains were overflowing during moderate rainfall, despite no apparent blockage. Our investigation revealed that the property's drainage system was suffering from groundwater infiltration through multiple deteriorated joints in the clay pipe drainage. During wet weather, groundwater was entering the drainage system in such volume that it overwhelmed the pipes before household waste water was even added. We carried out a comprehensive pipe relining of the affected sections, sealing the infiltration points and restoring the drainage system's integrity. We also cleared accumulated silt from the outfall section. Result: the drainage system now handles rainfall and household waste water effectively, with no further overflows. Tip: properties near the Basingstoke Canal should be aware that groundwater infiltration can mimic the symptoms of a blockage — a CCTV survey is the best way to identify the true cause.`
  },
  yateley: {
    landmarks: [
      "Yateley Green",
      "Yateley Common Country Park",
      "Cricket Hill",
      "Darby Green",
      "Yateley Lakes",
      "St Peter's Church",
      "Yateley Manor School",
      "Monteagle Lane",
      "Frogmore",
      "Blackbushe Airport",
      "Yateley Village Hall"
    ],
    drainageProfile: `Yateley is a town in north-east Hampshire, bordered by the Blackwater River to the north and extensive heathland to the south. The town has grown significantly since the 1960s, with large housing estates developed around the original village core. This means the drainage infrastructure varies considerably — the older village centre has Victorian and Edwardian drainage, while the estates from the 1960s-80s have drainage systems of their respective eras, including pitch fibre pipes in some areas. Yateley's heathland setting means sandy and gravelly soils in many locations, which generally provide good drainage, but pockets of clay can cause localised waterlogging. The proximity to the Blackwater River and Yateley Lakes means that some areas have higher water tables. The town's mature tree cover, particularly oak and birch on the heathland margins, contributes to root ingress problems and seasonal leaf litter blocking gullies and surface drains.`,
    localFAQs: [
      {
        question: "What drainage issues are common in Yateley?",
        answer: "Common issues include blocked surface drains from leaf debris, particularly in autumn near the heathland areas. Properties from the 1960s-70s may have pitch fibre drainage that has deteriorated over time. Tree root ingress from mature oaks and birches is also a frequent problem, and properties near the Blackwater River can experience high groundwater levels."
      },
      {
        question: "Do you cover Frogmore and Darby Green?",
        answer: "Yes, we cover all parts of Yateley including Frogmore, Darby Green, Cricket Hill, and the surrounding areas. Our engineers regularly attend callouts throughout the Yateley area."
      },
      {
        question: "How quickly can you reach Yateley?",
        answer: "We typically arrive in Yateley within 40 to 60 minutes for emergency callouts. Yateley is well-connected to our base via the A327 and A30."
      }
    ],
    caseStudy: `Call-out to a 1970s detached house near Cricket Hill: The homeowner had experienced three drain blockages in six months, each time resolved by rodding but returning within weeks. Our CCTV survey revealed the root cause — a section of pitch fibre pipe approximately 8 metres from the house had deformed under ground pressure, creating an oval cross-section that reduced flow capacity by around 40%. The deformed section was catching debris and fat deposits, creating a cycle of recurring blockages. We resolved this permanently by relining the affected 10-metre section with a structural resin liner, which reformed the pipe to a circular cross-section and created a smooth internal surface. Result: no further blockages in the 12 months since the repair. Tip: recurring blockages that keep coming back in the same location often indicate a structural problem rather than just a buildup — CCTV investigation can save money in the long run by identifying the root cause.`
  },
  sandhurst: {
    landmarks: [
      "Royal Military Academy Sandhurst",
      "Sandhurst Memorial Park",
      "Owlsmoor",
      "College Town",
      "Sandhurst High Street",
      "Shepherd Meadows",
      "The Look Out Discovery Centre",
      "Trilakes Country Park",
      "St Michael and All Angels Church",
      "Edgbarrow Woods",
      "Broadmoor"
    ],
    drainageProfile: `Sandhurst is a Berkshire town best known as the home of the Royal Military Academy. The town has a mix of housing ranging from older properties along the High Street and in the village core to extensive 1970s-80s estates in Owlsmoor and College Town, and more recent developments. The local geology is predominantly Bagshot Formation sands and gravels, which generally provide good natural drainage, but areas of clay can cause localised drainage problems. The town sits between the Blackwater River to the south and Swinley Forest to the north, and local watercourses including the Wish Stream influence groundwater levels in some areas. Drainage systems across Sandhurst vary from Victorian clay pipes in the older core to pitch fibre and plastic systems on the estates. Our engineers are familiar with all types and carry appropriate equipment for each.`,
    localFAQs: [
      {
        question: "What are the most common drainage problems in Sandhurst?",
        answer: "Common issues include tree root ingress from the town's many mature trees, pitch fibre pipe deterioration in 1970s-80s properties in Owlsmoor and College Town, and blocked surface water drains from leaf debris. Some properties near the Blackwater River experience seasonal drainage performance variations related to groundwater levels."
      },
      {
        question: "Do you cover Owlsmoor and College Town?",
        answer: "Yes, we cover all areas of Sandhurst including Owlsmoor, College Town, Sandhurst village centre, and the surrounding areas. We regularly attend callouts across the entire town."
      },
      {
        question: "How quickly can you reach Sandhurst?",
        answer: "We typically arrive in Sandhurst within 35 to 55 minutes for emergency callouts. The town is easily accessible from our Aldershot base via the A321."
      }
    ],
    caseStudy: `Call-out to an 1980s semi-detached house in Owlsmoor: The homeowner reported foul smells in the downstairs bathroom and intermittent slow drainage from the bath and basin. Our CCTV survey revealed that a section of the original plastic pipe had developed a crack, likely caused by ground settlement, allowing soil and sand to enter the pipe and create a partial obstruction. Additionally, a build-up of soap residue and hair had accumulated at the point of ingress, making the blockage worse over time. We cleared the obstruction using high-pressure jetting, then carried out a targeted patch repair on the cracked section using a resin patch liner. We also jetted the entire drainage run to remove accumulated residue from the pipe walls. Result: full flow restored, no more smells, and the patch repair prevents further soil ingress. Tip: unexplained drain smells often indicate a crack or break in the pipe that is allowing sewer gases to escape — a CCTV survey quickly identifies the source.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}

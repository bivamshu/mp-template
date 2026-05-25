<script lang="ts">
	type Lang = 'en' | 'np';
	type ScheduleCategory = 'legislative' | 'committee' | 'townhall';
	type MediaCategory = 'parliament' | 'field' | 'press';
	type EventStatus = 'confirmed' | 'active';
	type MediaFilter = 'all' | MediaCategory;

	interface Copy {
		brand: string;
		brandSub: string;
		langToggle: string;
		nav: {
			home: string;
			portal: string;
			profile: string;
			schedule: string;
			gallery: string;
			commitments: string;
			contact: string;
		};
		hero: {
			eyebrow: string;
			title: string;
			subtitle: string;
			ctaPrimary: string;
			ctaSecondary: string;
		};
		stats: {
			heading: string;
			years: string;
			yearsLabel: string;
			sessions: string;
			sessionsLabel: string;
			voters: string;
			votersLabel: string;
		};
		schedule: {
			heading: string;
			subheading: string;
			filterAll: string;
			categories: Record<ScheduleCategory, string>;
			statuses: Record<EventStatus, string>;
		};
		gallery: {
			heading: string;
			subheading: string;
			tabs: Record<MediaFilter, string>;
		};
		about: {
			heading: string;
			body: string;
			party: string;
		};
		sharedVision: {
			heading: string;
			body: string;
			leadershipOf: string;
			leadershipName: string;
			visionOf: string;
			visionName: string;
		};
		portal: {
			bellLabel: string;
		};
		commitments: {
			heading: string;
			subheading: string;
			download: string;
			statuses: Record<CommitmentStatus, string>;
		};
		profile: {
			sectionEyebrow: string;
			whoHeading: string;
			whoNarrative: string;
			qualificationsHeading: string;
			educationLabel: string;
			professionalLabel: string;
			leadershipOf: string;
			leadershipName: string;
			visionOf: string;
			visionName: string;
		};
		footer: {
			tagline: string;
			mottoEn: string;
			mottoNp: string;
			rights: string;
			email: string;
			privacy: string;
			terms: string;
		};
		modals: {
			privacyTitle: string;
			termsTitle: string;
			close: string;
			privacyBody: string;
			termsBody: string;
		};
	}

	type PortalCategory = 'bills' | 'expenses' | 'grievances';
	type PortalStatus = 'underReview' | 'passed' | 'pending';
	type CommitmentStatus = 'fulfilled' | 'inProgress' | 'pending';

	interface PortalRecord {
		id: string;
		refId: string;
		category: PortalCategory;
		status: PortalStatus;
		date: string;
		title: Record<Lang, string>;
		summary: Record<Lang, string>;
	}

	interface CommitmentDoc {
		id: string;
		fileType: 'PDF' | 'DOCX';
		date: string;
		status: CommitmentStatus;
		title: Record<Lang, string>;
		summary: Record<Lang, string>;
	}

	interface QualificationMilestone {
		id: string;
		year: string;
		kind: 'education' | 'professional';
		title: Record<Lang, string>;
		detail: Record<Lang, string>;
	}

	interface ScheduleEvent {
		id: string;
		dateWindow: string;
		time: string;
		category: ScheduleCategory;
		status: EventStatus;
		title: Record<Lang, string>;
		venue: Record<Lang, string>;
	}

	interface MediaItem {
		id: string;
		category: MediaCategory;
		image: string;
		date: string;
		title: Record<Lang, string>;
		caption: Record<Lang, string>;
		tag: Record<Lang, string>;
	}

	const translations: Record<Lang, Copy> = {
		en: {
			brand: 'RSP',
			brandSub: 'Official Parliamentary Office',
			langToggle: 'नेपाली',
			nav: {
				home: 'Home',
				portal: 'Ghanti Portal',
				profile: 'Profile',
				schedule: 'Schedule',
				gallery: 'Media',
				commitments: 'Commitments',
				contact: 'Contact'
			},
			hero: {
				eyebrow: 'Rastriya Swatantra Party · Federal Parliament',
				title: 'Honorable Member of Parliament',
				subtitle:
					'Serving the nation with institutional accountability, transparent governance, and constituency-first representation.',
				ctaPrimary: 'Ghanti Portal',
				ctaSecondary: 'Press & Media Gallery'
			},
			stats: {
				heading: 'Legislative Performance at a Glance',
				years: '4+',
				yearsLabel: 'Years in Political Service',
				sessions: '2+',
				sessionsLabel: 'Parliament Sessions Chaired',
				voters: '35,093+',
				votersLabel: 'Voters Directly Represented'
			},
			schedule: {
				heading: 'Parliamentary Schedule & Constituency Events',
				subheading:
					'Chronological hub for legislative sessions, committee work, and public engagement across Kathmandu Valley.',
				filterAll: 'All Events',
				categories: {
					legislative: 'Legislative Assembly',
					committee: 'Committee Debates',
					townhall: 'Public Townhalls'
				},
				statuses: {
					confirmed: 'Confirmed',
					active: 'Active Session'
				}
			},
			gallery: {
				heading: 'Multimedia Press Gallery',
				subheading:
					'Official visual record from parliament floor proceedings, field inspections, and press briefings.',
				tabs: {
					all: 'All',
					parliament: 'Parliament Floor',
					field: 'Field Inspections',
					press: 'Press Briefings'
				}
			},
			about: {
				heading: 'Institutional Mandate',
				body: 'This office advances evidence-based lawmaking, digital transparency, and direct constituency dialogue under the Rastriya Swatantra Party platform—committed to reform, accountability, and national development.',
				party: 'Rastriya Swatantra Party (RSP) · Nepal'
			},
			sharedVision: {
				heading: 'A Shared Vision',
				body: 'United with the Rastriya Swatantra Party (RSP) for structural change, driven by the spirit of a new Nepal and the movement of the people.',
				leadershipOf: 'The Leadership Of',
				leadershipName: 'Rabi Lamichhane',
				visionOf: 'The Vision Of',
				visionName: 'Balen Shah'
			},
			portal: {
				bellLabel: 'Visit RSP Official Platform'
			},
			commitments: {
				heading: 'Commitment Letters & Manifestos',
				subheading: 'Sankalpa Patra archive—formal public promises with live fulfillment tracking.',
				download: 'Download Document',
				statuses: {
					fulfilled: 'Fulfilled',
					inProgress: 'In Progress',
					pending: 'Pending Legislative Action'
				}
			},
			profile: {
				sectionEyebrow: 'The Candidate Profile',
				whoHeading: 'Who is Your Candidate?',
				whoNarrative:
					'The Honorable Member of Parliament serves with a mandate rooted in RSP anti-corruption values, digital governance reform, and constituency-first accountability—advancing transparent institutions, merit-based public service, and measurable legislative outcomes for every citizen represented.',
				qualificationsHeading: 'Technical & Academic Qualifications',
				educationLabel: 'Education Profile',
				professionalLabel: 'Professional Timeline',
				leadershipOf: 'The Leadership Of',
				leadershipName: 'Rastriya Swatantra Party',
				visionOf: 'The Vision Of',
				visionName: 'Accountable Governance Reform'
			},
			footer: {
				tagline: 'Building a modern, accountable, and digitally transparent Nepal.',
				mottoEn: 'Select the Knowledgeable',
				mottoNp: 'अब जान्नेलाई छान्ने',
				rights: '© 2026 Office of the Member of Parliament. All rights reserved.',
				email: 'parliament.office@example.gov.np',
				privacy: 'Privacy Policy',
				terms: 'Terms of Service'
			},
			modals: {
				privacyTitle: 'Privacy Policy',
				termsTitle: 'Terms of Service',
				close: 'Close',
				privacyBody:
					'We collect only information you provide directly. Personal data is used for constituency communication and is never sold to third parties.',
				termsBody:
					'By using this portal you agree to institutional terms governing public information access and acceptable use of parliamentary office resources.'
			}
		},
		np: {
			brand: 'रास्वपा',
			brandSub: 'आधिकारिक संसदीय कार्यालय',
			langToggle: 'English',
			nav: {
				home: 'गृहपृष्ठ',
				portal: 'घण्टी पोर्टल',
				profile: 'प्रोफाइल',
				schedule: 'तालिका',
				gallery: 'मिडिया',
				commitments: 'प्रतिबद्धता',
				contact: 'सम्पर्क'
			},
			hero: {
				eyebrow: 'राष्ट्रिय स्वतन्त्र पार्टी · संघीय संसद',
				title: 'माननीय सांसद',
				subtitle:
					'संस्थागत जवाफदेहिता, पारदर्शी शासन र निर्वाचन क्षेत्र-केन्द्रित प्रतिनिधित्वका साथ राष्ट्रको सेवा।',
				ctaPrimary: 'घण्टी पोर्टल',
				ctaSecondary: 'प्रेस र मिडिया ग्यालरी'
			},
			stats: {
				heading: 'वैधानिक कार्यसम्पादनको संक्षिप्त विवरण',
				years: '४+',
				yearsLabel: 'राजनीतिक सेवाका वर्ष',
				sessions: '२+',
				sessionsLabel: 'अध्यक्षता गरिएका संसदीय अधिवेशन',
				voters: '३५,०९३+',
				votersLabel: 'प्रत्यक्ष रूपमा प्रतिनिधित्व मतदाता'
			},
			schedule: {
				heading: 'संसदीय तालिका र निर्वाचन क्षेत्र कार्यक्रम',
				subheading:
					'वैधानिक अधिवेशन, समिति कार्य र काठमाडौं उपत्यकामा सार्वजनिक संलग्नताको कालक्रमिक केन्द्र।',
				filterAll: 'सबै कार्यक्रम',
				categories: {
					legislative: 'वैधानिक सभा',
					committee: 'समिति बहस',
					townhall: 'सार्वजनिक टाउनहल'
				},
				statuses: {
					confirmed: 'पुष्टि भयो',
					active: 'सक्रिय अधिवेशन'
				}
			},
			gallery: {
				heading: 'बहुमिडिया प्रेस ग्यालरी',
				subheading:
					'संसद् भवन, क्षेत्रीय निरीक्षण र प्रेस ब्रिफिङका आधिकारिक दृश्य अभिलेख।',
				tabs: {
					all: 'सबै',
					parliament: 'संसद् भवन',
					field: 'क्षेत्रीय निरीक्षण',
					press: 'प्रेस ब्रिफिङ'
				}
			},
			about: {
				heading: 'संस्थागत जिम्मेवारी',
				body: 'यो कार्यालयले राष्ट्रिय स्वतन्त्र पार्टीको मञ्च अन्तर्गत प्रमाण-आधारित कानून निर्माण, डिजिटल पारदर्शिता र प्रत्यक्ष निर्वाचन क्षेत्र संवादलाई अगाडि बढाउँछ—सुधार, जवाफदेहिता र राष्ट्रिय विकासप्रति प्रतिबद्ध।',
				party: 'राष्ट्रिय स्वतन्त्र पार्टी (रास्वपा) · नेपाल'
			},
			sharedVision: {
				heading: 'साझा दृष्टि',
				body: 'संरचनात्मक परिवर्तनका लागि राष्ट्रिय स्वतन्त्र पार्टी (रास्वपा) सँग एकजुट, नयाँ नेपालको भावना र जनआन्दोलनद्वारा प्रेरित।',
				leadershipOf: 'नेतृत्व',
				leadershipName: 'रवि लामिछान',
				visionOf: 'दृष्टि',
				visionName: 'बालेन शाह'
			},
			portal: {
				bellLabel: 'रास्वपा आधिकारिक मञ्च भ्रमण गर्नुहोस्'
			},
			commitments: {
				heading: 'प्रतिबद्धता पत्र र घोषणापत्र',
				subheading: 'सङ्कल्प पत्र अभिलेख—औपचारिक सार्वजनिक वाचा र पूर्ति ट्र्याकिङ।',
				download: 'कागजात डाउनलोड',
				statuses: {
					fulfilled: 'पूरा भयो',
					inProgress: 'प्रगतिमा',
					pending: 'वैधानिक कारबाही बाँकी'
				}
			},
			profile: {
				sectionEyebrow: 'उम्मेदवार प्रोफाइल',
				whoHeading: 'तपाईंको उम्मेदवार को हुन्?',
				whoNarrative:
					'माननीय सांसदले रास्वपाको भ्रष्टाचार-विरोधी मूल्य, डिजिटल शासन सुधार र निर्वाचन क्षेत्र-प्रथम जवाफदेहिताका साथ सेवा गर्छन्—पारदर्शी संस्था, योग्यता-आधारित सार्वजनिक सेवा र मापन योग्य वैधानिक नतिजा अगाडि बढाउँदै।',
				qualificationsHeading: 'प्राविधिक र शैक्षिक योग्यता',
				educationLabel: 'शिक्षा प्रोफाइल',
				professionalLabel: 'व्यावसायिक समयरेखा',
				leadershipOf: 'नेतृत्व',
				leadershipName: 'राष्ट्रिय स्वतन्त्र पार्टी',
				visionOf: 'दृष्टि',
				visionName: 'जवाफदेही शासन सुधार'
			},
			footer: {
				tagline: 'आधुनिक, जवाफदेही र डिजिटल रूपमा पारदर्शी नेपाल निर्माण।',
				mottoEn: 'Select the Knowledgeable',
				mottoNp: 'अब जान्नेलाई छान्ने',
				rights: '© २०२६ सांसद कार्यालय। सर्वाधिकार सुरक्षित।',
				email: 'parliament.office@example.gov.np',
				privacy: 'गोपनीयता नीति',
				terms: 'सेवा सर्तहरू'
			},
			modals: {
				privacyTitle: 'गोपनीयता नीति',
				termsTitle: 'सेवा सर्तहरू',
				close: 'बन्द गर्नुहोस्',
				privacyBody:
					'हामी तपाईंले प्रत्यक्ष रूपमा प्रदान गर्ने जानकारी मात्र सङ्कलन गर्छौं। व्यक्तिगत डाटा निर्वाचन क्षेत्र सञ्चारका लागि प्रयोग हुन्छ र तेस्रो पक्षलाई बिक्री हुँदैन।',
				termsBody:
					'यो पोर्टल प्रयोग गरेर तपाईं सार्वजनिक सूचना पहुँच र संसदीय कार्यालय स्रोतको स्वीकार्य प्रयोगसँग सम्बन्धित संस्थागत सर्तहरूमा सहमत हुनुहुन्छ।'
			}
		}
	};

	const scheduleEvents: ScheduleEvent[] = [
		{
			id: 'evt-1',
			dateWindow: '2026-05-28',
			time: '10:30 – 13:00',
			category: 'legislative',
			status: 'active',
			title: {
				en: 'Federal Parliament Plenary: Budget Implementation Review',
				np: 'संघीय संसद् पूर्ण बैठक: बजेट कार्यान्वयन समीक्षा'
			},
			venue: {
				en: 'Parliament Committee Room 3, Singha Durbar',
				np: 'संसद् समिति कक्ष नं. ३, सिंहदरबार'
			}
		},
		{
			id: 'evt-2',
			dateWindow: '2026-05-29',
			time: '14:00 – 16:30',
			category: 'committee',
			status: 'confirmed',
			title: {
				en: 'Public Accounts Committee: Transparency & Procurement Audit',
				np: 'लेखा समिति: पारदर्शिता र खरिद लेखापरीक्षण'
			},
			venue: {
				en: 'Legislative Committee Hall B, International Convention Centre',
				np: 'वैधानिक समिति हल बी, अन्तर्राष्ट्रिय सम्मेलन केन्द्र'
			}
		},
		{
			id: 'evt-3',
			dateWindow: '2026-05-31',
			time: '09:00 – 12:00',
			category: 'townhall',
			status: 'confirmed',
			title: {
				en: 'Constituency Open Forum: Urban Infrastructure Priorities',
				np: 'निर्वाचन क्षेत्र खुला मञ्च: शहरी पूर्वाधार प्राथमिकता'
			},
			venue: {
				en: 'District Constituency Office Meeting Hall, Kathmandu-5',
				np: 'जिल्ला निर्वाचन क्षेत्र कार्यालय बैठक हल, काठमाडौं-५'
			}
		},
		{
			id: 'evt-4',
			dateWindow: '2026-06-02',
			time: '11:00 – 13:30',
			category: 'committee',
			status: 'confirmed',
			title: {
				en: 'Education & Technology Committee: Digital Governance Framework',
				np: 'शिक्षा र प्रविधि समिति: डिजिटल शासन ढाँचा'
			},
			venue: {
				en: 'Parliament Annex Block, Committee Room 7',
				np: 'संसद् उपगृह, समिति कक्ष नं. ७'
			}
		},
		{
			id: 'evt-5',
			dateWindow: '2026-06-04',
			time: '15:00 – 17:00',
			category: 'townhall',
			status: 'active',
			title: {
				en: 'Youth Civic Engagement Roundtable',
				np: 'युवा नागरिक संलग्नता गोलमेच'
			},
			venue: {
				en: 'Municipal Community Hall, Ward Coordination Centre',
				np: 'नगरपालिका सामुदायिक हल, वडा समन्वय केन्द्र'
			}
		}
	];

	const mediaItems: MediaItem[] = [
		{
			id: 'med-1',
			category: 'parliament',
			image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&auto=format&fit=crop&q=80',
			date: '2026-05-20',
			title: { en: 'Plenary Address on National Reform Agenda', np: 'राष्ट्रिय सुधार एजेन्डामा पूर्ण बैठक सम्बोधन' },
			caption: {
				en: 'Delivering policy priorities during the federal parliamentary session.',
				np: 'संघीय संसदीय अधिवेशनमा नीति प्राथमिकताहरू प्रस्तुत गर्दै।'
			},
			tag: { en: 'Parliament Floor', np: 'संसद् भवन' }
		},
		{
			id: 'med-2',
			category: 'field',
			image: 'https://images.unsplash.com/photo-1469571486292-7bba3a6638f4?w=900&auto=format&fit=crop&q=80',
			date: '2026-05-18',
			title: { en: 'Constituency Infrastructure Site Review', np: 'निर्वाचन क्षेत्र पूर्वाधार स्थल निरीक्षण' },
			caption: {
				en: 'On-site assessment of public works and service delivery standards.',
				np: 'सार्वजनिक निर्माण र सेवा प्रवर्धन मापदण्डको स्थल मूल्याङ्कन।'
			},
			tag: { en: 'Field Inspections', np: 'क्षेत्रीय निरीक्षण' }
		},
		{
			id: 'med-3',
			category: 'press',
			image: 'https://images.unsplash.com/photo-1504711434966-e33886168f5c?w=900&auto=format&fit=crop&q=80',
			date: '2026-05-15',
			title: { en: 'Quarterly Press Briefing: Legislative Milestones', np: 'त्रैमासिक प्रेस ब्रिफिङ: वैधानिक उपलब्धि' },
			caption: {
				en: 'Media briefing outlining committee outcomes and public commitments.',
				np: 'समिति नतिजा र सार्वजनिक प्रतिबद्धताहरू प्रस्तुत गर्ने मिडिया ब्रिफिङ।'
			},
			tag: { en: 'Press Briefings', np: 'प्रेस ब्रिफिङ' }
		},
		{
			id: 'med-4',
			category: 'parliament',
			image: 'https://images.unsplash.com/photo-1551836022-d5d88eaa8b88?w=900&auto=format&fit=crop&q=80',
			date: '2026-05-12',
			title: { en: 'Committee Deliberation on Digital Transparency Bill', np: 'डिजिटल पारदर्शिता विधेयकमा समिति छलफल' },
			caption: {
				en: 'Cross-party dialogue on open-data standards for federal ministries.',
				np: 'संघीय मन्त्रालयहरूका लागि खुला-डाटा मापदण्डमा दलीय संवाद।'
			},
			tag: { en: 'Parliament Floor', np: 'संसद् भवन' }
		},
		{
			id: 'med-5',
			category: 'field',
			image: 'https://images.unsplash.com/photo-1573164713714-d95e436b8a6f?w=900&auto=format&fit=crop&q=80',
			date: '2026-05-08',
			title: { en: 'Community Health Outreach Coordination', np: 'सामुदायिक स्वास्थ्य आउटरीच समन्वय' },
			caption: {
				en: 'Field visit with local health boards and ward representatives.',
				np: 'स्थानीय स्वास्थ्य बोर्ड र वडा प्रतिनिधिसँग क्षेत्रीय भ्रमण।'
			},
			tag: { en: 'Field Inspections', np: 'क्षेत्रीय निरीक्षण' }
		},
		{
			id: 'med-6',
			category: 'press',
			image: 'https://images.unsplash.com/photo-1495020689067-379babbadcf0?w=900&auto=format&fit=crop&q=80',
			date: '2026-05-05',
			title: { en: 'International Press Roundtable', np: 'अन्तर्राष्ट्रिय प्रेस गोलमेच' },
			caption: {
				en: 'Discussing Nepal’s parliamentary diplomacy and regional cooperation.',
				np: 'नेपालको संसदीय कूटनीति र क्षेत्रीय सहकार्यबारे छलफल।'
			},
			tag: { en: 'Press Briefings', np: 'प्रेस ब्रिफिङ' }
		}
	];

	const scheduleCategoryFilters: Array<'all' | ScheduleCategory> = [
		'all',
		'legislative',
		'committee',
		'townhall'
	];

	const mediaFilters: MediaFilter[] = ['all', 'parliament', 'field', 'press'];

	const portalRecords: PortalRecord[] = [
		{
			id: 'pr-1',
			refId: 'RSP-BILL-2048-17',
			category: 'bills',
			status: 'underReview',
			date: '2026-05-22',
			title: { en: 'Digital Transparency & Open Data Act', np: 'डिजिटल पारदर्शिता र खुला डाटा ऐन' },
			summary: {
				en: 'Mandates federal ministry disclosure standards and public audit trails.',
				np: 'संघीय मन्त्रालय प्रकटीकरण मापदण्ड र सार्वजनिक लेखापरीक्षण ट्रेल अनिवार्य।'
			}
		},
		{
			id: 'pr-2',
			refId: 'RSP-EXP-2048-04',
			category: 'expenses',
			status: 'passed',
			date: '2026-05-18',
			title: { en: 'Constituency Development Fund Audit Q1', np: 'निर्वाचन क्षेत्र विकास कोष लेखापरीक्षण Q1' },
			summary: {
				en: 'Quarterly expenditure reconciliation published for public review.',
				np: 'त्रैमासिक खर्च मिलान सार्वजनिक समीक्षाका लागि प्रकाशित।'
			}
		},
		{
			id: 'pr-3',
			refId: 'RSP-GRV-2048-91',
			category: 'grievances',
			status: 'pending',
			date: '2026-05-14',
			title: { en: 'Ward Infrastructure Service Complaint Log', np: 'वडा पूर्वाधार सेवा गुनासो लग' },
			summary: {
				en: 'Citizen-submitted grievance routed to municipal coordination desk.',
				np: 'नागरिकबाट पेश गुनासो नगरपालिका समन्वय डेस्कमा पठाइयो।'
			}
		},
		{
			id: 'pr-4',
			refId: 'RSP-BILL-2048-09',
			category: 'bills',
			status: 'passed',
			date: '2026-05-10',
			title: { en: 'Anti-Corruption Enforcement Amendment', np: 'भ्रष्टाचार निवारण कार्यान्वयन संशोधन' },
			summary: {
				en: 'Strengthens procurement oversight and whistleblower protections.',
				np: 'खरिद निरीक्षण र व्हिसलब्लोअर संरक्षण सुदृढ।'
			}
		}
	];

	const commitmentDocs: CommitmentDoc[] = [
		{
			id: 'doc-1',
			fileType: 'PDF',
			date: '2026-01-15',
			status: 'fulfilled',
			title: { en: 'Five-Year Constituency Development Sankalpa', np: 'पाँच वर्षे निर्वाचन क्षेत्र विकास सङ्कल्प' },
			summary: {
				en: 'Pledged transparent budgeting and quarterly public audits.',
				np: 'पारदर्शी बजेट र त्रैमासिक सार्वजनिक लेखापरीक्षणको वाचा।'
			}
		},
		{
			id: 'doc-2',
			fileType: 'PDF',
			date: '2026-02-01',
			status: 'inProgress',
			title: { en: 'Digital Governance Manifesto 2026', np: 'डिजिटल शासन घोषणापत्र २०२६' },
			summary: {
				en: 'Open-data portal rollout and e-grievance desk deployment.',
				np: 'खुला-डाटा पोर्टल र इ-गुनासो डेस्क विस्तार।'
			}
		},
		{
			id: 'doc-3',
			fileType: 'DOCX',
			date: '2026-03-10',
			status: 'pending',
			title: { en: 'Education Access & Scholarship Reform Letter', np: 'शिक्षा पहुँच र छात्रवृत्ति सुधार पत्र' },
			summary: {
				en: 'Legislative action pending on merit-based scholarship expansion.',
				np: 'योग्यता-आधारित छात्रवृत्ति विस्तारमा वैधानिक कारबाही बाँकी।'
			}
		}
	];

	const qualificationMilestones: QualificationMilestone[] = [
		{
			id: 'q-1',
			year: '2018',
			kind: 'education',
			title: { en: "Master's in Public Policy", np: 'सार्वजनिक नीतिमा स्नातकोत्तर' },
			detail: { en: 'Governance, fiscal accountability, and institutional reform.', np: 'शासन, राजस्व जवाफदेहिता र संस्थागत सुधार।' }
		},
		{
			id: 'q-2',
			year: '2014',
			kind: 'education',
			title: { en: 'BSc in Engineering', np: 'इन्जिनियरिङमा स्नातक' },
			detail: { en: 'Infrastructure systems and public works planning.', np: 'पूर्वाधार प्रणाली र सार्वजनिक निर्माण योजना।' }
		},
		{
			id: 'q-3',
			year: '2020',
			kind: 'professional',
			title: { en: 'Legislative Committee Advisor', np: 'वैधानिक समिति सल्लाहकार' },
			detail: { en: 'Digital transparency and procurement oversight portfolios.', np: 'डिजिटल पारदर्शिता र खरिद निरीक्षण दायित्व।' }
		},
		{
			id: 'q-4',
			year: '2024',
			kind: 'professional',
			title: { en: 'Honorable Member of Parliament', np: 'माननीय सांसद' },
			detail: { en: 'Federal representation under RSP anti-corruption mandate.', np: 'रास्वपा भ्रष्टाचार-विरोधी मण्डल अन्तर्गत संघीय प्रतिनिधित्व।' }
		}
	];

	const portalCategoryFilters: Array<'all' | PortalCategory> = ['all', 'bills', 'expenses', 'grievances'];

	// SWAP: official transparent MP portrait asset
	const HERO_PORTRAIT_PLACEHOLDER =
		'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80';

	let currentLang = $state<Lang>('en');
	let activeMediaCategory = $state<MediaFilter>('all');
	let activeScheduleFilter = $state<'all' | ScheduleCategory>('all');
	let portalSearchQuery = $state('');
	let activePortalFilter = $state<'all' | PortalCategory>('all');
	let showPrivacyModal = $state(false);
	let showTermsModal = $state(false);

	const t = $derived(translations[currentLang]);

	const filteredSchedule = $derived(
		activeScheduleFilter === 'all'
			? scheduleEvents
			: scheduleEvents.filter((e) => e.category === activeScheduleFilter)
	);

	const filteredMedia = $derived(
		activeMediaCategory === 'all'
			? mediaItems
			: mediaItems.filter((m) => m.category === activeMediaCategory)
	);

	const filteredPortal = $derived.by(() => {
		const q = portalSearchQuery.trim().toLowerCase();
		return portalRecords.filter((record) => {
			const matchesCategory =
				activePortalFilter === 'all' || record.category === activePortalFilter;
			if (!matchesCategory) return false;
			if (!q) return true;
			const haystack = [
				record.refId,
				record.title.en,
				record.title.np,
				record.summary.en,
				record.summary.np
			]
				.join(' ')
				.toLowerCase();
			return haystack.includes(q);
		});
	});

	const educationMilestones = $derived(
		qualificationMilestones.filter((m) => m.kind === 'education')
	);
	const professionalMilestones = $derived(
		qualificationMilestones.filter((m) => m.kind === 'professional')
	);

	function toggleLang() {
		currentLang = currentLang === 'en' ? 'np' : 'en';
	}

	function formatDate(iso: string, lang: Lang): string {
		const locale = lang === 'np' ? 'ne-NP' : 'en-US';
		return new Date(iso).toLocaleDateString(locale, {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function statusStyles(status: EventStatus): string {
		return status === 'active'
			? 'border-[#0095DA]/40 bg-[#0095DA]/10 text-[#0095DA]'
			: 'border-slate-300 bg-slate-100 text-slate-600';
	}

	function portalStatusStyles(status: PortalStatus): string {
		if (status === 'passed') return 'border-[#0095DA]/40 bg-[#0095DA]/10 text-[#0095DA]';
		if (status === 'underReview') return 'border-amber-500/40 bg-amber-100 text-amber-700';
		return 'border-slate-300 bg-slate-100 text-slate-600';
	}

	function commitmentStatusStyles(status: CommitmentStatus): string {
		if (status === 'fulfilled') return 'border-[#0095DA]/40 bg-[#0095DA]/10 text-[#0095DA]';
		if (status === 'inProgress') return 'border-amber-500/40 bg-amber-100 text-amber-700';
		return 'border-slate-300 bg-slate-100 text-slate-600';
	}
</script>

<svelte:head>
	<title>{t.brand} — {t.hero.title}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="min-h-screen bg-white text-slate-900 antialiased"
	style="font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;"
>
	<!-- Header -->
	<header
		class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md"
		style="box-shadow: 0 1px 0 0 rgba(0, 149, 218, 0.08);"
	>
		<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:h-[4.25rem]">
			<a href="#hero" class="leading-tight">
				<p class="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">{t.hero.title}</p>
				<p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0095DA]">{t.brandSub}</p>
			</a>

			<button
				type="button"
				onclick={toggleLang}
				class="inline-flex items-center gap-2 rounded-md border border-[#0095DA]/40 bg-white px-4 py-2 text-xs font-bold tracking-wide text-slate-800 transition-all hover:border-[#0095DA] hover:text-[#0095DA] active:scale-[0.98]"
				aria-label="Toggle language"
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3.5 w-3.5" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.967 8.967 0 0 0 3.5-7.5 8.967 8.967 0 0 0-3.5-7.5M3.75 6h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
				<span>{t.langToggle}</span>
			</button>
		</div>
	</header>

	<!-- Hero -->
	<section id="hero" class="border-b border-slate-200 bg-white">
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-12 lg:py-24">
			<div class="lg:col-span-7">
				<p class="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0095DA]">
					{t.hero.eyebrow}
				</p>
				<h1 class="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
					{t.hero.title}
				</h1>
				<p class="mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
					{t.hero.subtitle}
				</p>
				<div class="mt-10">
					<a
						href="#gallery"
						class="inline-flex items-center justify-center rounded-md bg-[#0095DA] px-6 py-3 text-sm font-bold tracking-wide text-white transition-all hover:brightness-110 active:scale-[0.98]"
						style="box-shadow: 0 8px 24px -8px rgba(0, 149, 218, 0.45);"
					>
						{t.hero.ctaSecondary}
					</a>
				</div>
			</div>

			<div class="lg:col-span-5">
				<!-- SWAP: official transparent MP portrait asset -->
				<div
					class="mx-auto flex aspect-[3/4] w-full max-w-sm items-center justify-center rounded-lg border-2 border-dashed border-[#0095DA]/40 bg-slate-50"
					aria-hidden="true"
				></div>
			</div>
		</div>
	</section>

	<!-- Ghanti Portal — split brand block -->
	<section id="portal" class="border-b border-[#0095DA]/30">
		<div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
			<div class="flex flex-col justify-center bg-white px-8 py-14 text-slate-900 md:px-12 md:py-20 lg:px-14">
				<h2 class="text-3xl font-black tracking-tight md:text-4xl">{t.sharedVision.heading}</h2>
				<p class="mt-5 max-w-lg text-base font-medium leading-relaxed text-slate-600">{t.sharedVision.body}</p>
			</div>

			<div class="flex min-h-[20rem] items-center justify-center bg-[#0095DA] px-8 py-14 md:min-h-[24rem]">
				<a
					href="https://rspnepal.org"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex flex-col items-center text-center transition-transform hover:scale-105 active:scale-[0.98]"
					aria-label={t.portal.bellLabel}
				>
					<span class="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg ring-4 ring-white/30 transition-shadow group-hover:ring-white/60 md:h-36 md:w-36">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-16 w-16 text-[#0095DA] md:h-20 md:w-20" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2M10 3.5a2 2 0 1 1 4 0M5.25 14.25c.135-1.127.324-2.228.566-3.292a7.5 7.5 0 0 1 12.368 0c.242 1.064.431 2.165.566 3.292m-13.5 0h13.5m-13.5 0a1.5 1.5 0 0 0-1.5 1.5v.75h16.5v-.75a1.5 1.5 0 0 0-1.5-1.5M12 18.75v1.5a1.5 1.5 0 0 1-3 0v-1.5m3 0h-3" />
						</svg>
					</span>
					<p class="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-white">{t.portal.bellLabel}</p>
				</a>
			</div>
		</div>
	</section>

	<!-- Commitment Letters -->
	<section id="commitments" class="border-b border-[#0095DA]/20 bg-[#0095DA] py-16 md:py-20">
		<div class="mx-auto max-w-7xl px-6 md:px-10">
			<p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80">{t.commitments.heading}</p>
			<p class="mt-2 max-w-2xl text-sm font-medium text-white/90">{t.commitments.subheading}</p>
			<div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each commitmentDocs as doc (doc.id)}
					<article class="rounded-lg border border-white/25 bg-white p-5 text-slate-900 transition-colors hover:border-white hover:shadow-lg">
						<div class="flex items-start gap-4">
							<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#0095DA]/30 bg-[#0095DA]/10 text-[10px] font-black text-[#0095DA]">
								{doc.fileType}
							</div>
							<div class="min-w-0 flex-1">
								<h3 class="text-sm font-bold">{doc.title[currentLang]}</h3>
								<p class="mt-1 text-xs font-medium text-slate-600">{doc.summary[currentLang]}</p>
								<p class="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
									{formatDate(doc.date, currentLang)}
								</p>
								<span class="mt-3 inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider {commitmentStatusStyles(doc.status)}">
									{t.commitments.statuses[doc.status]}
								</span>
							</div>
						</div>
						<button
							type="button"
							class="mt-4 w-full rounded-md border border-[#0095DA] bg-transparent px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#0095DA] transition-all hover:bg-[#0095DA] hover:text-white"
						>
							{t.commitments.download}
						</button>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Candidate Profile & Qualifications -->
	<section id="profile" class="border-b border-slate-200 bg-slate-50 py-16 md:py-24">
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-2">
			<div>
				<p class="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#0095DA]">{t.profile.sectionEyebrow}</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{t.profile.whoHeading}</h2>
				<p class="mt-6 text-base font-medium leading-relaxed text-slate-600">{t.profile.whoNarrative}</p>
			</div>

			<div>
				<p class="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#0095DA]">{t.profile.qualificationsHeading}</p>
				<div class="mt-6 space-y-10">
					<div>
						<p class="mb-4 border-l-4 border-[#0095DA] pl-3 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-700">
							{t.profile.educationLabel}
						</p>
						<ul class="space-y-5">
							{#each educationMilestones as item (item.id)}
								<li class="border-l border-[#0095DA]/30 pl-5">
									<p class="text-[10px] font-bold uppercase tracking-wider text-[#0095DA]">{item.year}</p>
									<h3 class="mt-1 text-sm font-bold text-slate-900">{item.title[currentLang]}</h3>
									<p class="mt-1 text-xs font-medium text-slate-600">{item.detail[currentLang]}</p>
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<p class="mb-4 border-l-4 border-[#0095DA] pl-3 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-700">
							{t.profile.professionalLabel}
						</p>
						<ul class="space-y-5">
							{#each professionalMilestones as item (item.id)}
								<li class="border-l border-[#0095DA]/30 pl-5">
									<p class="text-[10px] font-bold uppercase tracking-wider text-[#0095DA]">{item.year}</p>
									<h3 class="mt-1 text-sm font-bold text-slate-900">{item.title[currentLang]}</h3>
									<p class="mt-1 text-xs font-medium text-slate-600">{item.detail[currentLang]}</p>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats -->
	<section id="stats" class="border-b border-slate-200 bg-white py-14 md:py-20">
		<div class="mx-auto max-w-7xl px-6 md:px-10">
			<h2 class="mb-10 text-center text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
				{t.stats.heading}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
				<div
					class="rounded-lg border border-slate-200 bg-white px-8 py-10 text-center shadow-sm"
				>
					<p class="text-5xl font-black tracking-tight text-[#0095DA] md:text-6xl">{t.stats.years}</p>
					<p class="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-600">
						{t.stats.yearsLabel}
					</p>
				</div>
				<div
					class="rounded-lg border border-slate-200 bg-white px-8 py-10 text-center shadow-sm"
				>
					<p class="text-5xl font-black tracking-tight text-[#0095DA] md:text-6xl">{t.stats.sessions}</p>
					<p class="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-600">
						{t.stats.sessionsLabel}
					</p>
				</div>
				<div
					class="rounded-lg border border-slate-200 bg-white px-8 py-10 text-center shadow-sm"
				>
					<p class="text-5xl font-black tracking-tight text-[#0095DA] md:text-6xl">{t.stats.voters}</p>
					<p class="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-600">
						{t.stats.votersLabel}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Gallery -->
	<section id="gallery" class="border-b border-slate-200 bg-white py-16 md:py-24">
		<div class="mx-auto max-w-7xl px-6 md:px-10">
			<div class="mb-10 max-w-2xl">
				<h2 class="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{t.gallery.heading}</h2>
				<p class="mt-4 text-base font-medium leading-relaxed text-slate-600">{t.gallery.subheading}</p>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each mediaItems as item (item.id)}
					<article class="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
						<div class="aspect-[4/3] overflow-hidden">
							<img
								src={item.image}
								alt={item.title[currentLang]}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
						</div>
						<div
							class="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<span class="mb-2 w-fit rounded-full border border-white/40 bg-[#0095DA] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
								{item.tag[currentLang]}
							</span>
							<p class="text-[10px] font-semibold uppercase tracking-wider text-slate-200">
								{formatDate(item.date, currentLang)}
							</p>
							<h3 class="mt-1 text-base font-bold text-white">{item.title[currentLang]}</h3>
							<p class="mt-2 text-sm font-medium leading-snug text-slate-100">
								{item.caption[currentLang]}
							</p>
						</div>
						<div class="border-t border-slate-100 p-4 group-hover:opacity-0 transition-opacity duration-300">
							<p class="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
								{formatDate(item.date, currentLang)}
							</p>
							<h3 class="mt-1 text-sm font-bold text-slate-800 line-clamp-2">{item.title[currentLang]}</h3>
						</div>
					</article>
				{/each}
			</div>

		</div>
	</section>

	<!-- Footer -->
	<footer id="contact" class="bg-white py-14 md:py-16">
		<div class="mx-auto max-w-7xl px-6 md:px-10">
			<div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
				<div class="md:col-span-4">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-md border border-[#0095DA]/30 bg-[#0095DA]/10">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-5 w-5 text-[#0095DA]" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2M10 3.5a2 2 0 1 1 4 0M5.25 14.25c.135-1.127.324-2.228.566-3.292a7.5 7.5 0 0 1 12.368 0c.242 1.064.431 2.165.566 3.292m-13.5 0h13.5m-13.5 0a1.5 1.5 0 0 0-1.5 1.5v.75h16.5v-.75a1.5 1.5 0 0 0-1.5-1.5M12 18.75v1.5a1.5 1.5 0 0 1-3 0v-1.5m3 0h-3" />
							</svg>
						</div>
						<p class="text-lg font-black tracking-tight text-slate-900">{t.brand}</p>
					</div>
					<p class="mt-4 max-w-xs text-sm font-medium leading-relaxed text-slate-600">{t.footer.tagline}</p>
					<p class="mt-4 text-base font-bold text-slate-900">{t.footer.mottoNp}</p>
					<p class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0095DA]">{t.footer.mottoEn}</p>
				</div>

				<nav class="flex flex-col gap-2 md:col-span-4 md:items-start" aria-label="Footer">
					<a href="#hero" class="text-xs font-extrabold uppercase tracking-wider text-slate-600 transition-colors hover:text-[#0095DA]">{t.nav.home}</a>
					<a href="#portal" class="text-xs font-extrabold uppercase tracking-wider text-slate-600 transition-colors hover:text-[#0095DA]">{t.nav.portal}</a>
					<a href="#commitments" class="text-xs font-extrabold uppercase tracking-wider text-slate-600 transition-colors hover:text-[#0095DA]">{t.nav.commitments}</a>
					<a href="#profile" class="text-xs font-extrabold uppercase tracking-wider text-slate-600 transition-colors hover:text-[#0095DA]">{t.nav.profile}</a>
					<a href="#stats" class="text-xs font-extrabold uppercase tracking-wider text-slate-600 transition-colors hover:text-[#0095DA]">{t.stats.heading}</a>
					<a href="#gallery" class="text-xs font-extrabold uppercase tracking-wider text-slate-600 transition-colors hover:text-[#0095DA]">{t.nav.gallery}</a>
				</nav>

				<div class="md:col-span-4 md:flex md:flex-col md:items-end">
					<div class="flex items-center gap-4">
						<a href="https://facebook.com" target="_blank" rel="noreferrer" class="text-slate-500 transition-colors hover:text-[#0095DA]" aria-label="Facebook">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
						</a>
						<a href="https://x.com" target="_blank" rel="noreferrer" class="text-slate-500 transition-colors hover:text-[#0095DA]" aria-label="X">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noreferrer" class="text-slate-500 transition-colors hover:text-[#0095DA]" aria-label="LinkedIn">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
						</a>
						<a href="https://youtube.com" target="_blank" rel="noreferrer" class="text-slate-500 transition-colors hover:text-[#0095DA]" aria-label="YouTube">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
						</a>
					</div>
					<a href="mailto:{t.footer.email}" class="mt-6 text-sm font-semibold text-[#0095DA] transition-colors hover:brightness-110">
						{t.footer.email}
					</a>
				</div>
			</div>

			<div class="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
				<p class="text-xs font-semibold text-slate-600">{t.footer.rights}</p>
				<div class="flex items-center gap-6">
					<button
						type="button"
						onclick={() => (showPrivacyModal = true)}
						class="text-xs font-extrabold uppercase tracking-wider text-slate-500 transition-colors hover:text-[#0095DA]"
					>
						{t.footer.privacy}
					</button>
					<button
						type="button"
						onclick={() => (showTermsModal = true)}
						class="text-xs font-extrabold uppercase tracking-wider text-slate-500 transition-colors hover:text-[#0095DA]"
					>
						{t.footer.terms}
					</button>
				</div>
			</div>
		</div>
	</footer>

	{#if showPrivacyModal}
		<div class="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" role="presentation">
			<div class="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="privacy-heading">
				<h2 id="privacy-heading" class="text-xl font-black text-slate-900">{t.modals.privacyTitle}</h2>
				<p class="mt-4 text-sm font-medium leading-relaxed text-slate-600">{t.modals.privacyBody}</p>
				<button
					type="button"
					onclick={() => (showPrivacyModal = false)}
					class="mt-6 rounded-md bg-[#0095DA] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white"
				>
					{t.modals.close}
				</button>
			</div>
		</div>
	{/if}

	{#if showTermsModal}
		<div class="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" role="presentation">
			<div class="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="terms-heading">
				<h2 id="terms-heading" class="text-xl font-black text-slate-900">{t.modals.termsTitle}</h2>
				<p class="mt-4 text-sm font-medium leading-relaxed text-slate-600">{t.modals.termsBody}</p>
				<button
					type="button"
					onclick={() => (showTermsModal = false)}
					class="mt-6 rounded-md bg-[#0095DA] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white"
				>
					{t.modals.close}
				</button>
			</div>
		</div>
	{/if}
</div>

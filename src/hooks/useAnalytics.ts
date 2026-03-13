declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
	}
}

const track = (eventName: string, params?: Record<string, unknown>) => {
	if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
		window.gtag('event', eventName, params);
	}
};

export const useAnalytics = () => {
	const trackCvDownload = () => {
		track('cv_download', {
			event_category: 'engagement',
			event_label: 'CV Download Button',
		});
	};

	const trackSocialClick = (platform: string) => {
		track('social_click', {
			event_category: 'engagement',
			event_label: platform,
			platform,
		});
	};

	const trackProjectView = (projectTitle: string) => {
		track('project_view', {
			event_category: 'engagement',
			event_label: projectTitle,
			project_title: projectTitle,
		});
	};

	const trackContactClick = (method: string) => {
		track('contact_click', {
			event_category: 'conversion',
			event_label: method,
			contact_method: method,
		});
	};

	const trackScrollDepth = (depth: number) => {
		track('scroll_depth', {
			event_category: 'engagement',
			event_label: `${depth}%`,
			depth_percentage: depth,
		});
	};

	const trackHeroCta = (label: string) => {
		track('hero_cta_click', {
			event_category: 'conversion',
			event_label: label,
			cta_label: label,
		});
	};

	return { trackCvDownload, trackSocialClick, trackProjectView, trackContactClick, trackScrollDepth, trackHeroCta };
};

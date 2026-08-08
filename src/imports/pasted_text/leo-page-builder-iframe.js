createPersonProfile setInternalOrTestUser Gi Fi Ki opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing $i debug Tr Ui getPageViewId captureTraceFeedback captureTraceMetric Ri".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_tJVjPhda8vybzKHSZ6yaq4Q9wdJ5ZW7Rpf2kf3ChAjLL', {
          api_host: 'https://us.i.posthog.com',
          person_profiles: 'always',
          recordCrossOriginIframes: true,
      })

        posthog.identify('11647', {
          email: 'onkaryadav453@gmail.com',
          name: 'aaa',
          user_id: 11647,
          organization_id: 22151,
          plan: ''
        })
  </script>
<script data-llama-id="109">
(function() {
  // ============================================================================
  // LEO Page Builder - Iframe Communication Script
  // ============================================================================
  // This script handles postMessage communication for the LEO page builder system.
  //
  // IMPORTANT: Origin-Based Message Routing
  // ========================================
  // There are TWO iframe communication systems in LlamaPress that both use
  // { source: 'leonardo' } messages:
  //
  // 1. LEONARDO (Full App Builder) - localhost:8000 -> localhost:3000
  //    - Parent: LlamaBot/FastAPI at localhost:8000
  //    - Child: Rails app at localhost:3000
  //    - message_handler.js handles these (cross-origin)
  //
  // 2. LEO (Page Builder) - localhost:3000 -> localhost:3000
  //    - Parent: /pages/:id/chat at localhost:3000
  //    - Child: /pages/:id/preview at localhost:3000 (THIS PAGE)
  //    - THIS SCRIPT handles these messages (same-origin)
  //
  // We distinguish between them by checking event.origin:
  // - Same-origin (localhost:3000) = Leo -> respond HERE
  // - Cross-origin (localhost:8000) = Leonardo -> ignore here, let message_handler.js handle it
  // ============================================================================

  // DEBUG: Log when this script runs
  console.log("[page.html.erb] Script starting, will set view_path to: app/views/pages/preview.html.erb");

  // Wrap in IIFE to avoid global scope pollution and redeclaration errors
  if (window.leonardoScriptLoaded) {
    console.log("[page.html.erb] Already loaded, skipping");
    return;
  }
  window.leonardoScriptLoaded = true;

  // Set page metadata from server-side variables (injected above)
  // These come from Rails @view_path which contains the actual view file path
  window.page_loaded_at = 1786141017.503693;
  window.request_path = "/pages/46216/preview";
  window.view_path = "app/views/pages/preview.html.erb";
  console.log("[page.html.erb] Set window.view_path =", window.view_path);

  // Initialize full_html on DOMContentLoaded
  window.addEventListener('DOMContentLoaded', () => {
    window.full_html = document.documentElement.outerHTML;
    console.log("[page.html.erb] Page metadata initialized:", {
      request_path: window.request_path,
      view_path: window.view_path,
      page_loaded_at: window.page_loaded_at
    });
  });

  // Also set full_html immediately if DOM is already loaded
  if (document.readyState === 'loading') {
    // DOMContentLoaded hasn't fired yet, wait for it
  } else {
    // DOM is already loaded
    window.full_html = document.documentElement.outerHTML;
    console.log("[page.html.erb] Page metadata initialized (DOM already loaded):", {
      request_path: window.request_path,
      view_path: window.view_path,
      page_loaded_at: window.page_loaded_at
    });
  }

  window.addEventListener("message", (event) => {
      // Only process messages with source 'leonardo'
      if (event.data.source !== 'leonardo') { return; }

      // CRITICAL: Only respond to SAME-ORIGIN messages (from Leo chat at localhost:3000)
      // Cross-origin messages (from Leonardo at localhost:8000) are handled by
      // message_handler.js (loaded via importmap in application.js), not here.
      // This prevents duplicate responses and ensures correct view_path values.
      if (event.origin !== window.location.origin) {
          console.log("[page.html.erb] Ignoring cross-origin message (handled by message_handler.js):", event.origin);
          return;
      }

      console.log("[page.html.erb] Processing same-origin message from Leo:", event.data);

      // Handle element selector commands
      if (event.data.type === 'enable-element-selector') {
          window.enableElementSelector();
          return;
      }

      if (event.data.type === 'disable-element-selector') {
          window.disableElementSelector();
          return;
      }

      // Handle debug info request (this is the main message type Leonardo sends)
      if (event.data.type === 'get_debug_info') {
          // Ensure we have the most up-to-date HTML content
          window.full_html = document.documentElement.outerHTML;

          console.log("Sending debug info back to Leonardo:", {
              request_path: window.request_path,
              view_path: window.view_path,
              page_loaded_at: window.page_loaded_at
          });

          // Validate that we have current data
          if (!window.request_path || !window.view_path) {
              console.warn("Missing request_path or view_path - page may not be fully loaded");
          }

          event.source.postMessage({
              source: 'llamapress',
              full_html: window.full_html,
              request_path: window.request_path,
              view_path: window.view_path,
              page_loaded_at: window.page_loaded_at
          }, event.origin);
          return;
      }

      console.log("Unhandled message type:", event.data.type);
  });

  // Element Selector functionality
  let elementSelectorEnabled = false;
  let elementSelectorStyles = null;
  let currentHighlightedElement = null;

  window.enableElementSelector = function() {
      if (elementSelectorEnabled) return;

      elementSelectorEnabled = true;
      console.log('Element selector enabled');

      // Inject styles for hover highlighting
      elementSelectorStyles = document.createElement('style');
      elementSelectorStyles.id = 'element-selector-styles';
      elementSelectorStyles.textContent = `
          .element-selector-highlight {
              outline: 2px solid #4CAF50 !important;
              outline-offset: 2px !important;
              background-color: rgba(76, 175, 80, 0.1) !important;
              cursor: crosshair !important;
          }
          .element-selector-active * {
              cursor: crosshair !important;
          }
      `;
      document.head.appendChild(elementSelectorStyles);

      // Mark body as active
      document.body.classList.add('element-selector-active');

      // Add event listeners
      document.addEventListener('mousemove', handleElementSelectorMouseMove, true);
      document.addEventListener('click', handleElementSelectorClick, true);
  };

  window.disableElementSelector = function() {
      if (!elementSelectorEnabled) return;

      elementSelectorEnabled = false;
      console.log('Element selector disabled');

      // Remove styles
      if (elementSelectorStyles) {
          elementSelectorStyles.remove();
          elementSelectorStyles = null;
      }

      // Remove body class
      document.body.classList.remove('element-selector-active');

      // Remove highlight from current element
      if (currentHighlightedElement) {
          currentHighlightedElement.classList.remove('element-selector-highlight');
          currentHighlightedElement = null;
      }

      // Remove event listeners
      document.removeEventListener('mousemove', handleElementSelectorMouseMove, true);
      document.removeEventListener('click', handleElementSelectorClick, true);
  };

  function handleElementSelectorMouseMove(event) {
      const target = event.target;

      if (!target || target.tagName === 'HTML' || target.tagName === 'BODY') {
          return;
      }

      // Remove highlight from previous element
      if (currentHighlightedElement && currentHighlightedElement !== target) {
          currentHighlightedElement.classList.remove('element-selector-highlight');
      }

      // Add highlight to current target
      target.classList.add('element-selector-highlight');
      currentHighlightedElement = target;
  }

  function handleElementSelectorClick(event) {
      event.preventDefault();
      event.stopPropagation();

      const target = event.target;

      if (!target || target.tagName === 'HTML' || target.tagName === 'BODY') {
          return;
      }

      // Extract text content for display
      let textContent = extractElementText(target);

      // Get the outerHTML for the LLM
      let outerHTML = target.outerHTML;

      // Send selected element data to parent
      window.parent.postMessage({
          source: 'element-selector',
          type: 'element-selected',
          text: textContent,
          html: outerHTML
      }, '*');

      // Visual feedback
      showSelectionFeedback(target);
  }

  function extractElementText(element) {
      // Get text content and clean it up
      let text = element.textContent || element.innerText || '';
      text = text.trim();

      // If text is too long, truncate it
      if (text.length > 200) {
          text = text.substring(0, 200) + '...';
      }

      // If element has no text, try to describe it
      if (!text) {
          const tagName = element.tagName.toLowerCase();
          const className = element.className ? `.${element.className.split(' ')[0]}` : '';
          const id = element.id ? `#${element.id}` : '';
          text = `${tagName}${id}${className} element`;
      }

      return text;
  }

  function showSelectionFeedback(element) {
      const originalOutline = element.style.outline;
      const originalBackground = element.style.backgroundColor;

      element.style.outline = '3px solid #4CAF50';
      element.style.backgroundColor = 'rgba(76, 175, 80, 0.3)';

      setTimeout(() => {
          element.style.outline = originalOutline;
          element.style.backgroundColor = originalBackground;
      }, 300);
  }

  console.log("[page.html.erb] Leo iframe communication script loaded!");
})();
</script>


  <!-- PostHog -->
  <script data-llama-id="110">
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Ii init Di qi Sr Bi Zi Pi capture calculateEventProperties Yi register register_once register_for_session unregister unregister_for_session Xi getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Ji identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Wi Vi createPersonProfile setInternalOrTestUser Gi Fi Ki opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing $i debug Tr Ui getPageViewId captureTraceFeedback captureTraceMetric Ri".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_tJVjPhda8vybzKHSZ6yaq4Q9wdJ5ZW7Rpf2kf3ChAjLL', {
          api_host: 'https://us.i.posthog.com',
          person_profiles: 'always',
          recordCrossOriginIframes: true,
      })

  </script>
<script async="" defer="" src="https://tools.luckyorange.com/core/lo.js?site-id=4cac7c23" data-llama-id="111"></script>
<script data-llama-id="112">
(function() {
  // ============================================================================
  // LEO Page Builder - Iframe Communication Script
  // ============================================================================
  // This script handles postMessage communication for the LEO page builder system.
  //
  // IMPORTANT: Origin-Based Message Routing
  // ========================================
  // There are TWO iframe communication systems in LlamaPress that both use
  // { source: 'leonardo' } messages:
  //
  // 1. LEONARDO (Full App Builder) - localhost:8000 -> localhost:3000
  //    - Parent: LlamaBot/FastAPI at localhost:8000
  //    - Child: Rails app at localhost:3000
  //    - message_handler.js handles these (cross-origin)
  //
  // 2. LEO (Page Builder) - localhost:3000 -> localhost:3000
  //    - Parent: /pages/:id/chat at localhost:3000
  //    - Child: /pages/:id/preview at localhost:3000 (THIS PAGE)
  //    - THIS SCRIPT handles these messages (same-origin)
  //
  // We distinguish between them by checking event.origin:
  // - Same-origin (localhost:3000) = Leo -> respond HERE
  // - Cross-origin (localhost:8000) = Leonardo -> ignore here, let message_handler.js handle it
  // ============================================================================

  // DEBUG: Log when this script runs
  console.log("[page.html.erb] Script starting, will set view_path to: app/views/pages/preview.html.erb");

  // Wrap in IIFE to avoid global scope pollution and redeclaration errors
  if (window.leonardoScriptLoaded) {
    console.log("[page.html.erb] Already loaded, skipping");
    return;
  }
  window.leonardoScriptLoaded = true;

  // Set page metadata from server-side variables (injected above)
  // These come from Rails @view_path which contains the actual view file path
  window.page_loaded_at = 1786141049.2390287;
  window.request_path = "/pages/46216/preview";
  window.view_path = "app/views/pages/preview.html.erb";
  console.log("[page.html.erb] Set window.view_path =", window.view_path);

  // Initialize full_html on DOMContentLoaded
  window.addEventListener('DOMContentLoaded', () => {
    window.full_html = document.documentElement.outerHTML;
    console.log("[page.html.erb] Page metadata initialized:", {
      request_path: window.request_path,
      view_path: window.view_path,
      page_loaded_at: window.page_loaded_at
    });
  });

  // Also set full_html immediately if DOM is already loaded
  if (document.readyState === 'loading') {
    // DOMContentLoaded hasn't fired yet, wait for it
  } else {
    // DOM is already loaded
    window.full_html = document.documentElement.outerHTML;
    console.log("[page.html.erb] Page metadata initialized (DOM already loaded):", {
      request_path: window.request_path,
      view_path: window.view_path,
      page_loaded_at: window.page_loaded_at
    });
  }

  window.addEventListener("message", (event) => {
      // Only process messages with source 'leonardo'
      if (event.data.source !== 'leonardo') { return; }

      // CRITICAL: Only respond to SAME-ORIGIN messages (from Leo chat at localhost:3000)
      // Cross-origin messages (from Leonardo at localhost:8000) are handled by
      // message_handler.js (loaded via importmap in application.js), not here.
      // This prevents duplicate responses and ensures correct view_path values.
      if (event.origin !== window.location.origin) {
          console.log("[page.html.erb] Ignoring cross-origin message (handled by message_handler.js):", event.origin);
          return;
      }

      console.log("[page.html.erb] Processing same-origin message from Leo:", event.data);

      // Handle element selector commands
      if (event.data.type === 'enable-element-selector') {
          window.enableElementSelector();
          return;
      }

      if (event.data.type === 'disable-element-selector') {
          window.disableElementSelector();
          return;
      }

      // Handle debug info request (this is the main message type Leonardo sends)
      if (event.data.type === 'get_debug_info') {
          // Ensure we have the most up-to-date HTML content
          window.full_html = document.documentElement.outerHTML;

          console.log("Sending debug info back to Leonardo:", {
              request_path: window.request_path,
              view_path: window.view_path,
              page_loaded_at: window.page_loaded_at
          });

          // Validate that we have current data
          if (!window.request_path || !window.view_path) {
              console.warn("Missing request_path or view_path - page may not be fully loaded");
          }

          event.source.postMessage({
              source: 'llamapress',
              full_html: window.full_html,
              request_path: window.request_path,
              view_path: window.view_path,
              page_loaded_at: window.page_loaded_at
          }, event.origin);
          return;
      }

      console.log("Unhandled message type:", event.data.type);
  });

  // Element Selector functionality
  let elementSelectorEnabled = false;
  let elementSelectorStyles = null;
  let currentHighlightedElement = null;

  window.enableElementSelector = function() {
      if (elementSelectorEnabled) return;

      elementSelectorEnabled = true;
      console.log('Element selector enabled');

      // Inject styles for hover highlighting
      elementSelectorStyles = document.createElement('style');
      elementSelectorStyles.id = 'element-selector-styles';
      elementSelectorStyles.textContent = `
          .element-selector-highlight {
              outline: 2px solid #4CAF50 !important;
              outline-offset: 2px !important;
              background-color: rgba(76, 175, 80, 0.1) !important;
              cursor: crosshair !important;
          }
          .element-selector-active * {
              cursor: crosshair !important;
          }
      `;
      document.head.appendChild(elementSelectorStyles);

      // Mark body as active
      document.body.classList.add('element-selector-active');

      // Add event listeners
      document.addEventListener('mousemove', handleElementSelectorMouseMove, true);
      document.addEventListener('click', handleElementSelectorClick, true);
  };

  window.disableElementSelector = function() {
      if (!elementSelectorEnabled) return;

      elementSelectorEnabled = false;
      console.log('Element selector disabled');

      // Remove styles
      if (elementSelectorStyles) {
          elementSelectorStyles.remove();
          elementSelectorStyles = null;
      }

      // Remove body class
      document.body.classList.remove('element-selector-active');

      // Remove highlight from current element
      if (currentHighlightedElement) {
          currentHighlightedElement.classList.remove('element-selector-highlight');
          currentHighlightedElement = null;
      }

      // Remove event listeners
      document.removeEventListener('mousemove', handleElementSelectorMouseMove, true);
      document.removeEventListener('click', handleElementSelectorClick, true);
  };

  function handleElementSelectorMouseMove(event) {
      const target = event.target;

      if (!target || target.tagName === 'HTML' || target.tagName === 'BODY') {
          return;
      }

      // Remove highlight from previous element
      if (currentHighlightedElement && currentHighlightedElement !== target) {
          currentHighlightedElement.classList.remove('element-selector-highlight');
      }

      // Add highlight to current target
      target.classList.add('element-selector-highlight');
      currentHighlightedElement = target;
  }

  function handleElementSelectorClick(event) {
      event.preventDefault();
      event.stopPropagation();

      const target = event.target;

      if (!target || target.tagName === 'HTML' || target.tagName === 'BODY') {
          return;
      }

      // Extract text content for display
      let textContent = extractElementText(target);

      // Get the outerHTML for the LLM
      let outerHTML = target.outerHTML;

      // Send selected element data to parent
      window.parent.postMessage({
          source: 'element-selector',
          type: 'element-selected',
          text: textContent,
          html: outerHTML
      }, '*');

      // Visual feedback
      showSelectionFeedback(target);
  }

  function extractElementText(element) {
      // Get text content and clean it up
      let text = element.textContent || element.innerText || '';
      text = text.trim();

      // If text is too long, truncate it
      if (text.length > 200) {
          text = text.substring(0, 200) + '...';
      }

      // If element has no text, try to describe it
      if (!text) {
          const tagName = element.tagName.toLowerCase();
          const className = element.className ? `.${element.className.split(' ')[0]}` : '';
          const id = element.id ? `#${element.id}` : '';
          text = `${tagName}${id}${className} element`;
      }

      return text;
  }

  function showSelectionFeedback(element) {
      const originalOutline = element.style.outline;
      const originalBackground = element.style.backgroundColor;

      element.style.outline = '3px solid #4CAF50';
      element.style.backgroundColor = 'rgba(76, 175, 80, 0.3)';

      setTimeout(() => {
          element.style.outline = originalOutline;
          element.style.backgroundColor = originalBackground;
      }, 300);
  }

  console.log("[page.html.erb] Leo iframe communication script loaded!");
})();
</script>

</body></html>
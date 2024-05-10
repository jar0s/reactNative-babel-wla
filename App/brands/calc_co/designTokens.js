import designTokensJSON from './designTokens.json';
import defaultDesignTokensJSON from '../default/designTokens.json';

export default { ...defaultDesignTokensJSON, ...designTokensJSON };
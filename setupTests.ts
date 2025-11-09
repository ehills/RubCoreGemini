import '@testing-library/jest-dom';
import { vi } from 'vitest';

window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

/** Shared envelope and consumer-side status types for data-product APIs. */

export type DataStatus =
  | "ok"
  | "empty"
  | "stale"
  | "malformed"
  | "not_found"
  | "forbidden"
  | "error"
  | "accepted";

export interface DataProductEnvelope<T = Record<string, unknown>> {
  schema_version: string;
  source: string;
  retrieved_at: string;
  data_status: DataStatus | string;
  items: T[];
  next_cursor: string | null;
  error?: string;
  detail?: string;
}

export type ConsumerLoadState =
  | "loading"
  | "ready"
  | "empty"
  | "stale"
  | "timeout"
  | "unavailable"
  | "error";

export interface ProductDefinition {
  id: string;
  title: string;
  icon: string;
  repo: string;
  schemaVersion: string;
  port: number;
  baseUrl: string;
}

export interface FetchOptions {
  baseUrl?: string;
  timeoutMs?: number;
  signal?: AbortSignal;
  useFixtures?: boolean;
  fetchImpl?: typeof fetch;
  loadFixture?: (productId: string) => Promise<DataProductEnvelope> | DataProductEnvelope;
  limit?: number;
  cursor?: string | null;
}

export interface ProductLoadResult<T = Record<string, unknown>> {
  productId: string;
  state: ConsumerLoadState;
  envelope: DataProductEnvelope<T> | null;
  source: "api" | "fixture" | "none";
  errorMessage?: string;
  freeOnly: true;
  allowExternalWrites: false;
}

export interface ProductHealthSummary {
  id: string;
  name: string;
  icon: string;
  repo: string;
  port: number;
  schema_version: string;
  record_count: number;
  data_status: string;
  retrieved_at: string | null;
  status: string;
  load_state: ConsumerLoadState;
  source: "api" | "fixture" | "none";
  errorMessage?: string;
}

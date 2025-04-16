#!/bin/bash

set -euo pipefail

echo "$E2E_TEST_ENV" | base64 --decode > .env.production

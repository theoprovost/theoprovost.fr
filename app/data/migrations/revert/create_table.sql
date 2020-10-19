-- Revert theoprovost-presentation:create_table from pg

BEGIN;

DROP TABLE "contact";

COMMIT;

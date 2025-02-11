<?php

namespace App\Traits;

use League\Csv\Reader;
use Exception;

trait CsvImporterTrait
{
    /**
     * Read CSV and return only matching fillable fields
     *
     * @param string $filePath
     * @param array $fillable
     * @param array $mapping
     * @return array
     * @throws Exception
     */
    public function importCsv(string $file, array $fillable, array $mapping = [])
    {
        try {
            // Load CSV
            $csv = Reader::createFromPath($file);
            $csv->setHeaderOffset(0);

            $headers = $csv->getHeader();

            $validColumns = [];
            foreach ($headers as $header) {
                $field = $mapping[$header] ?? $header;
                if (in_array($field, $fillable)) {
                    $validColumns[$header] = $field;
                }
            }

            $records = [];
            foreach ($csv as $row) {
                $data = [];
                foreach ($validColumns as $csvHeader => $dbField) {
                    $data[$dbField] = $row[$csvHeader] ?? null;
                }
                $records[] = (object) $data;
            }

            return $records;
        } catch (Exception $e) {
            throw new Exception("Error processing CSV: " . $e->getMessage());
        }
    }
}

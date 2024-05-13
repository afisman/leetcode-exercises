<?php


//2828 is Acronym
    /**
     * @param String[] $words
     * @param String $s
     * @return Boolean
     */
    function isAcronym($words, $s) {
        $result = '';

        for($i = 0; $i <count($words); $i++) {
            $result[$i] = $words[$i][0];
        }

        return $result === $s;
    }

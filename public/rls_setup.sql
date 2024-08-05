CREATE POLICY "Allow read access to all users"
ON "public"."todo"
FOR SELECT
USING (true);

CREATE POLICY "Allow write access to all users"
ON "public"."todo"
FOR UPDATE
USING (true);
WITH CHECK (true);

CREATE POLICY "Allow write access to all users1"
ON "public"."todo"
FOR INSERT
USING (true);